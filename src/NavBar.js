import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import UserProvider from './firebase/UserProvider';

const NavBar = ({message}) => {
    const { user } = UserProvider();
    const navigate = useNavigate();

    return (
        <nav>
            <ul> 
            <li>
                    <Link to="/grid">Grid</Link>
                </li>
            <li>
                    <Link to="/list">List</Link>
                </li>
            { user &&  <li><Link to="/butterflies">Edit</Link></li>   }
            {message && <li>{message}</li> }
         </ul>
            <div className="nav-right">
                {user
                    ? <div>Logged in as <strong>{user.email}</strong> <button className="ui primary button login" 
                    onClick={() => { signOut(getAuth()); navigate('/login');
                    }}>Log Out</button></div>
                    : <button className="ui primary button login" 
                    onClick={() => {
                        navigate('/login');
                    }}>Log In</button>}
            </div>
        </nav>
    );
}

export default NavBar;