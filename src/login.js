import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="w-100 gap-3 d-grid"
        style={{
            justifyContent: 'center',
        }}
        >
            <h2>Login Page</h2>
            <div className="input-group">
                <input
                    type="text"
                    placeholder='Enter your username'
                    className='input-group form-control'
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    placeholder='Enter your password'
                    className='input-group form-control'
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button className='btn btn-primary' onClick={handleLogin}>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Login;
