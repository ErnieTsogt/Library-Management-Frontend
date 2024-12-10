import React, { useState } from 'react';
import { returnBook } from '../api';

function ReturnBook() {
  const [borrowId, setBorrowId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await returnBook(borrowId);
    setBorrowId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Return Book</h2>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Borrow ID"
          value={borrowId}
          onChange={(e) => setBorrowId(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Return</button>
    </form>
  );
}

export default ReturnBook;
