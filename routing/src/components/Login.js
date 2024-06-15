import React, { useState } from 'react';
import styles from './Login.module.css';

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h1 className={styles.title}>DOTA 2</h1>
      <form onSubmit={handleSubmit}>

        <h2><b>LOGIN</b></h2>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;