import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const login = () => {
        axios.post('http://localhost:5000/api/auth/login', { username, password })
            .then(response => {
                setToken(response.data.token);
                setMessage('Login successful');
            })
            .catch(() => {
                setMessage('Login failed');
            });
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <p>{message}</p>
        </div>
    );
};

export default AdminLogin;
