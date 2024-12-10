import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Użycie useNavigate do nawigacji
import axios from '../axios-instance';

const AddBook = () => {
  const navigate = useNavigate(); // Inicjalizacja useNavigate
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
    };

    axios
      .post('/books', newBook)
      .then((response) => {
        setSuccessMessage('Book added successfully!');
        setErrorMessage('');
        setTitle('');
        setAuthor('');
        setTimeout(() => navigate('/books'), 2000); // Po dodaniu książki, przekierowanie na stronę książek
      })
      .catch((error) => {
        setErrorMessage('Failed to add book. Please try again.');
        setSuccessMessage('');
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add a New Book</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleAddBook}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
