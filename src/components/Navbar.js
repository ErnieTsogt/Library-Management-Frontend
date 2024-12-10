import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Library System</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/borrow-records">Borrowed</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/return">Return</Link></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/books/add">Add Book</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/books/edit">Edit Book</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/borrow">Borrow Book</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
