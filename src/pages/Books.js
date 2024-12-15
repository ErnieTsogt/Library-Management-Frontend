import React, { useEffect, useState } from 'react';
import axios from '../axios-instance';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch books from the backend
  const fetchBooks = () => {
    axios
      .get('/books')
      .then((response) => {
        setBooks(response.data);
        setError('');
      })
      .catch((err) => {
        setError('Could not fetch books. Please try again later.');
        console.error(err);
      });
  };

  // Delete book by ID
  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios
        .delete(`/books/${id}`)
        .then(() => {
          setSuccess('Book deleted successfully.');
          setBooks(books.filter((book) => book.id !== id)); // Update the list
        })
        .catch((err) => {
          setError('Could not delete the book. Please try again later.');
          console.error(err);
        });
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Books in the Library</h1>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success text-center" role="alert">
          {success}
        </div>
      )}

      {books.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ width: '10%' }}>ID</th>
              <th scope="col" style={{ width: '35%' }}>Title</th>
              <th scope="col" style={{ width: '30%' }}>Author</th>
              <th scope="col" style={{ width: '15%' }}>Status</th>
              <th scope="col" style={{ width: '10%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="text-center font-weight-bold">{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.available ? 'Available' : 'Borrowed'}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
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
