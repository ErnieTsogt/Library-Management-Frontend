import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Borrow from './pages/Borrow';
import Return from './pages/Return';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BorrowRecords from './components/BorrowRecords';
import Register from './components/Register';
import Login from './components/Login';
import axios from './axios-instance';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/users/status'); 
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = () => setIsAuthenticated(true); 
  const handleLogout = () => {
    setIsAuthenticated(false); 
    axios.post('/users/logout'); 
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/books" element={isAuthenticated ? <Books /> : <Navigate to="/login" />} />
          <Route path="/borrow" element={isAuthenticated ? <Borrow /> : <Navigate to="/login" />} />
          <Route path="/return" element={isAuthenticated ? <Return /> : <Navigate to="/login" />} />
          <Route path="/books/add" element={isAuthenticated ? <AddBook /> : <Navigate to="/login" />} />
          <Route path="/books/edit" element={isAuthenticated ? <EditBook /> : <Navigate to="/login" />} />
          <Route path="/borrow-records" element={isAuthenticated ? <BorrowRecords /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
