import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const loginApiUrl = 'https://testurl.com/login';

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(loginApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // If API request fails, we still pass login (per the requirement)
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const data = await response.json();
            console.log('Login API response:', data);
            // Set login success
            setLoggedIn(true);
        }
        catch (error) {
            console.error('Error during login:', error);
            // Even if the API fails, we consider the login a success
            setLoggedIn(true);
        }
        setLoading(false);
    };

    const handleUserChange = (event) => {
        setUsername(event.target.value);
        validateForm();
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        validateForm();
    };

    const validateForm = () => {
        if (username.length > 0 && password.length > 4) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }



    return (
        <>
            <div className='Cont'>
                <h1 className='mb-4'>User-Login</h1>

                {loggedIn ? (
                    <div>Welcome, {username}! You are logged in.</div>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="mb-3" >
                            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" value={username} onChange={handleUserChange} required placeholder="name@example.com" />
                        </div>
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" value={password} onChange={handlePasswordChange} aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                        <Link className='btnx' to="/Home"><button type="submit" disabled={loading}> {loading ? 'Login' : 'Login'}</button>
                        </Link>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </form>
                )}
            </div >
        </>
    )
}
