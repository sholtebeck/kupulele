import React from 'react';
import { logout } from './firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSession } from './firebase/UserProvider';

function Header() {
  const history = useNavigate();
  const { user } = useSession();

  const logoutUser = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <header>
      <h2>{process.env.REACT_APP_NAME}</h2>
      {!!user && (
        <button className="ui secondary button logout" onClick={logoutUser}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
