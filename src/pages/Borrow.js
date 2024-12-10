import React, { useState } from 'react';
import axios from '../axios-instance';

const Borrow = () => {
  const [borrowData, setBorrowData] = useState({ bookId: '', borrowerName: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleBorrow = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/borrow', borrowData);
      setMessage(response.data.message || 'Book borrowed successfully!');
      setError('');
      setBorrowData({ bookId: '', borrowerName: '' });
    } catch (err) {
      setError('Error: Could not borrow the book. Please try again.');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Borrow a Book</h1>

      {message && (
        <div className="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleBorrow} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="bookId" className="form-label">
            Book ID
          </label>
          <input
            type="number"
            id="bookId"
            className="form-control"
            value={borrowData.bookId}
            onChange={(e) => setBorrowData({ ...borrowData, bookId: e.target.value })}
            required
            placeholder="Enter Book ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="borrowerName" className="form-label">
            Borrower Name
          </label>
          <input
            type="text"
            id="borrowerName"
            className="form-control"
            value={borrowData.borrowerName}
            onChange={(e) => setBorrowData({ ...borrowData, borrowerName: e.target.value })}
            required
            placeholder="Enter Borrower's Name"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Borrow Book
        </button>
      </form>
    </div>
  );
};

export default Borrow;
