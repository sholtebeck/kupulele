import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/butterflies');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
      <div className="login-container"> 
      <div className="ui card login-card"> 
        <h1>Create Kupulele Account</h1>
        {error && <p className="error">{error}</p>}
        <label> 
        <strong>Username: </strong> 
        <input
            placeholder="Your email address"
            value={email}
            size="35"
            onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
        <strong>Password: </strong>
        <input
            type="password"
            placeholder="Your password"
            value={password}
            size="15"
            onChange={e => setPassword(e.target.value)} />
        <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            size="15"
            onChange={e => setConfirmPassword(e.target.value)} />
        </label><p></p>
        <button className="ui primary button login" onClick={createAccount}>Create Account</button>
        <Link to="/login">Already have an account? Log in here</Link>
        </div>
        </div>
    );
    }

export default Signup;

