import React, { useState } from 'react';
import { borrowBook } from '../api';

function BorrowBook() {
  const [bookId, setBookId] = useState('');
  const [borrowerName, setBorrowerName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await borrowBook({ bookId, borrowerName });
    setBookId('');
    setBorrowerName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Borrow Book</h2>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Borrower Name"
          value={borrowerName}
          onChange={(e) => setBorrowerName(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Borrow</button>
    </form>
  );
}

export default BorrowBook;
