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
        <Link to="/books" style={linkStyle}>
          <button style={buttonStyle}>View Books</button>
        </Link>
        <Link to="/borrow" style={linkStyle}>
          <button style={buttonStyle}>Borrow Records</button>
        </Link>
        <Link to="/return" style={linkStyle}>
          <button style={buttonStyle}>Return Records</button>
        </Link>
        <Link to="/books/add" style={linkStyle}>
          <button style={buttonStyle}>Add a Book</button>
        </Link>
        <Link to="/borrow-records" style={linkStyle}>
          <button style={buttonStyle}>Borrow History</button>
        </Link>
        <Link to="/books/edit" style={linkStyle}>
          <button style={buttonStyle}>Edit a Book</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  width: '100%', // Przyciski zajmują całą szerokość siatki
  padding: '15px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  textAlign: 'center',
  textDecoration: 'none',
};

const linkStyle = {
  textDecoration: 'none', // Usunięcie podkreślenia w linkach
};

export default Home;
