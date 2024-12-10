import React, { useState } from 'react';
import axios from '../axios-instance';

const EditBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const fetchBookDetails = () => {
    if (!bookId || isNaN(bookId)) {
      setErrorMessage('Please enter a valid book ID.');
      return;
    }

    axios
      .get(`/books/${bookId}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setErrorMessage('');
        setIsEditing(true); // Pozwala na edycję po załadowaniu danych
      })
      .catch((error) => {
        setErrorMessage('Failed to fetch book details. Please check the ID.');
        setTitle('');
        setAuthor('');
        console.error(error);
      });
  };

  const handleEditBook = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
    };

    axios
      .put(`/books/${bookId}`, updatedBook)
      .then((response) => {
        setSuccessMessage('Book updated successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to update book. Please try again.');
        setSuccessMessage('');
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Book</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleEditBook}>
        {/* Pole ID książki */}
        <div className="mb-3">
          <label className="form-label">Book ID</label>
          <input
            type="text"
            className="form-control"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={fetchBookDetails}
          >
            Fetch Book Details
          </button>
        </div>

        {/* Pole tytułu */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={!isEditing} // Pole jest niedostępne, dopóki nie zostanie wczytane ID
          />
        </div>

        {/* Pole autora */}
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            disabled={!isEditing} // Pole jest niedostępne, dopóki nie zostanie wczytane ID
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isEditing}>
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
