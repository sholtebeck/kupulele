import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import UserProvider from './firebase/UserProvider';

const NavBar = () => {
    const { user } = UserProvider();
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/list">List</Link>
                </li>
                { user && <li>
                    <Link to="/butterflies">Edit</Link>
                </li>   
                }
         </ul>
            <div className="nav-right">
                {user
                    ? <button className="ui primary button login" 
                    onClick={() => { signOut(getAuth()); navigate('/login');
                    }}>Log Out</button>
                    : <button className="ui primary button login" 
                    onClick={() => {
                        navigate('/login');
                    }}>Log In</button>}
            </div>
        </nav>
    );
}

export default NavBar;