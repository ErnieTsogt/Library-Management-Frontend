import React, { useState } from 'react';
import axios from '../axios-instance';

const Borrow = () => {
  const [bookId, setBookId] = useState('');
  const [borrowerName, setBorrowerName] = useState('');
  const [bookDetails, setBookDetails] = useState({ title: '', author: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);

  // Funkcja do pobierania szczegółów książki
  const fetchBookDetails = async () => {
    if (!bookId || isNaN(bookId)) {
      setError('Please enter a valid book ID.');
      setBookDetails({ title: '', author: '' });
      return;
    }

    try {
      const response = await axios.get(`/books/${bookId}`);
      setBookDetails(response.data);
      setError('');
      setIsFetchingDetails(true);
    } catch (err) {
      setError('Failed to fetch book details. Please check the ID.');
      setBookDetails({ title: '', author: '' });
      setIsFetchingDetails(false);
      console.error(err);
    }
  };

  // Funkcja obsługująca wypożyczenie książki
  const handleBorrow = async (e) => {
    e.preventDefault();

    const borrowData = { bookId, borrowerName };

    try {
      const response = await axios.post('/borrow', borrowData);
      setMessage(response.data.message || 'Book borrowed successfully!');
      setError('');
      setBookId('');
      setBorrowerName('');
      setBookDetails({ title: '', author: '' });
      setIsFetchingDetails(false);
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
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
            placeholder="Enter Book ID"
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={fetchBookDetails}
          >
            Fetch Book Details
          </button>
        </div>

        {isFetchingDetails && (
          <div className="mb-3">
            <p><strong>Title:</strong> {bookDetails.title || 'N/A'}</p>
            <p><strong>Author:</strong> {bookDetails.author || 'N/A'}</p>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="borrowerName" className="form-label">
            Borrower Name
          </label>
          <input
            type="text"
            id="borrowerName"
            className="form-control"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            required
            placeholder="Enter Borrower's Name"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!isFetchingDetails} // Aktywne tylko po pobraniu szczegółów książki
        >
          Borrow Book
        </button>
      </form>
    </div>
  );
};

export default Borrow;
