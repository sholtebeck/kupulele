import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
//    const emap = {"Susy":"ingrahas@gmail.com","Steve":"sholtebeck@gmail.com"}
    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/butterflies');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
      <div className="login-container"> 
      <div className="ui card login-card">
        <h1>Kupulele Login</h1>
        {error && <p className="error">{error}</p>}
        <label> 
        <strong>Username: </strong> 
        <input
            placeholder="Your email address"
            value={email}
            size="30"
            onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
        <strong>Password: </strong>
        <input
            type="password"
            placeholder="Your password"
            value={password}
            size="30"
            onChange={e => setPassword(e.target.value)} />
        </label><p></p>
        <button className="ui primary button login" onClick={logIn}>Log In</button>
        <Link to="/signup">Don't have an account? Create one here</Link>
        </div>
        </div>
    );
}

export default Login;