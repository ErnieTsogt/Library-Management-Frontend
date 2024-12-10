import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f4f4f9', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
        Welcome to the Library Management System
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
        Manage your books, borrowers, and records effortlessly.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <Link to="/books">
          <button style={buttonStyle}>View Books</button>
        </Link>
        <Link to="/borrow">
          <button style={buttonStyle}>Borrow Records</button>
        </Link>
        <Link to="/return">
          <button style={buttonStyle}>Return Records</button>
        </Link>
        <Link to="/books/add">
          <button style={buttonStyle}>Add a Book</button>
        </Link>
        <Link to="/borrow-records">
          <button style={buttonStyle}>Borrow history</button>
        </Link>
        <Link to="/books/edit">
          <button style={buttonStyle}>Edit a Book</button>
        </Link>
        
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '15px 30px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
};

buttonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Home;
