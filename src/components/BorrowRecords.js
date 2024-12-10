import React, { useEffect, useState } from 'react';
import axios from '../axios-instance';

const BorrowRecords = () => {
  const [borrowRecords, setBorrowRecords] = useState([]);
  const [error, setError] = useState('');

  // Fetch borrow records from the backend
  useEffect(() => {
    axios
      .get('/borrow') // Fetch all borrow records
      .then((response) => {
        setBorrowRecords(response.data); // Assuming response contains borrow records with book details
        setError('');
      })
      .catch((err) => {
        setError('Could not fetch borrow records. Please try again later.');
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Borrow Records</h1>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {borrowRecords.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book ID</th> {/* Book ID column */}
              <th>Book Title</th>
              <th>Borrower Name</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td> {/* Borrow record ID */}
                <td>{record.book.id}</td> {/* Book ID */}
                <td>{record.book.title}</td> {/* Book Title */}
                <td>{record.borrowerName}</td>
                <td>{new Date(record.borrowDate).toLocaleString()}</td>
                <td>
                  {record.returnDate
                    ? new Date(record.returnDate).toLocaleString()
                    : 'Not returned yet'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No borrow records found.</p>
      )}
    </div>
  );
};

export default BorrowRecords;
