import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        validateForm();
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        validateForm();
    };

    const validateForm = () => {
        if (email.length > 0 && password.length > 0) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };


    return (
        <>
            <div className='Cont'>
                <h1 className='mb-4'>User-Login</h1>
                <form>
                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={handleEmailChange} placeholder="name@example.com" />
                    </div>
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" value={password} onChange={handlePasswordChange} aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    <Link className='btnx' to="/main"><button type="submit" disabled={isButtonDisabled}> Submit </button>
                    </Link>
                </form>
            </div >
        </>
    )
}
