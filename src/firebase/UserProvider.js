import React, { useEffect, useState, useContext } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

export const UserContext = React.createContext();
const auth = firebase.auth();
export const UserProvider = (props) => {
  const [session, setSession] = useState({
    user: null,
    loading: true,
    isAdmin: false,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      let isAdmin = false;

      if (user) {
        const token = await user.getIdTokenResult();
        isAdmin = token.claims.admin;
      }

      setSession({ loading: false, user, isAdmin });
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};