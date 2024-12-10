import React, { useState } from 'react';
import axios from '../axios-instance';

const EditBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const fetchBookDetails = async () => {
    if (!bookId || isNaN(bookId)) {
      setErrorMessage('Please enter a valid book ID.');
      setTitle('');
      setAuthor('');
      setIsEditing(false);
      return;
    }

    try {
      const response = await axios.get(`/books/${bookId}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setErrorMessage('');
      setIsEditing(true);
    } catch (error) {
      setErrorMessage('Failed to fetch book details. Please check the ID.');
      setTitle('');
      setAuthor('');
      setIsEditing(false);
      console.error(error);
    }
  };

  const handleEditBook = async (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
    };

    try {
      await axios.put(`/books/${bookId}`, updatedBook);
      setSuccessMessage('Book updated successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to update book. Please try again.');
      setSuccessMessage('');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit a Book</h1>

      {successMessage && (
        <div className="alert alert-success text-center" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleEditBook} className="mx-auto" style={{ maxWidth: '400px' }}>
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
            placeholder="Enter Book ID"
          />
          <button
            type="button"
            className="btn btn-secondary mt-2 w-100"
            onClick={fetchBookDetails}
          >
            Fetch Book Details
          </button>
        </div>

        {isEditing && (
          <>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                id="author"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!isEditing}
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
