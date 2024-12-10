import React, { useState } from 'react';
import axios from '../axios-instance';

const Return = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReturn = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.put(`/borrow/return/${bookId}`);
      setMessage(response.data.message || 'Book returned successfully!');
      setError('');
      setBookId('');
    } catch (err) {
      setError('Error: Could not return the book. Please try again.');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Return a Book</h1>

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

      <form
        onSubmit={handleReturn}
        className="mx-auto"
        style={{ maxWidth: '400px' }}
      >
        <div className="mb-3">
          <label htmlFor="bookId" className="form-label">
            Book ID
          </label>
          <input
            type="text"
            id="bookId"
            className="form-control"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
            placeholder="Enter the Book ID"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Return Book
        </button>
      </form>
    </div>
  );
};

export default Return;
