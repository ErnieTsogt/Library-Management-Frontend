import React, { useEffect, useState } from 'react';
import axios from '../axios-instance';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  // Fetch books from the backend
  useEffect(() => {
    axios
      .get('/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        setError('Could not fetch books. Please try again later.');
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Books in the Library</h1>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {books.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ width: '10%' }}>ID</th>
              <th scope="col" style={{ width: '40%' }}>Title</th>
              <th scope="col" style={{ width: '30%' }}>Author</th>
              <th scope="col" style={{ width: '20%' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="text-center font-weight-bold">{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.available ? 'Available' : 'Borrowed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No books available in the library.</p>
      )}
    </div>
  );
};

export default Books;
