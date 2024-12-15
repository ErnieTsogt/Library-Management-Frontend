import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios-instance';
import './LoginRegister.css'; // Dodatkowy plik CSS na potrzeby personalizacji

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', { username, password });
      console.log('Login successful:', response.data);
      onLogin(); // Informuj App o zalogowaniu
      navigate('/'); // Przekierowanie na stronę główną
    } catch (err) {
      setError('Error: Invalid username or password.');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-center">Login</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <div className="text-center mt-3">
          <p>Don't have an account?</p>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate('/register')}
          >
            Register Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
