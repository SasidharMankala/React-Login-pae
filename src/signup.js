import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = () => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="w-100 gap-3 d-grid" style={{
            justifyContent: 'center',
        }}>
            <h2>Sign Up Page</h2>
            <div className="input-group">
                <input
                    placeholder='Enter your username'
                    type="text"
                    className='input-group form-control'
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="input-group">
                <input
                    type="email"
                    className='input-group form-control'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    className='input-group form-control'
                    onChange={handlePasswordChange}
                />
            </div>
            <button className='btn btn-primary' onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
}

export default Signup;
