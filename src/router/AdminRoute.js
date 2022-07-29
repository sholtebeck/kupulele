import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!!user && isAdmin) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    />
  );
};

export default AdminRoute;
