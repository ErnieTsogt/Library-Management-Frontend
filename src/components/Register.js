import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios-instance';
import './LoginRegister.css'; // Reużycie pliku CSS dla logowania i rejestracji

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/register', { username, password });
      setMessage('Registration successful!');
      setError('');
      setTimeout(() => navigate('/login'), 2000); // Przekierowanie na logowanie
    } catch (err) {
      setError('Error: Could not register. Please try again.');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister} className="login-form">
        <h2 className="text-center">Register</h2>
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
        {message && <p className="text-success">{message}</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="d-grid">
          <button type="submit" className="btn btn-success">Register</button>
        </div>
        <div className="text-center mt-3">
          <p>Already have an account?</p>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate('/login')}
          >
            Login Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
