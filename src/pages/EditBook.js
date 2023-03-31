import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { updateBook } from "../reducer/BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const [country, setCountry] = useState(location.state.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author, country }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <Navbar />
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="title">Title: </label><br />
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label><br />
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="country">Country: </label><br />
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <Footer />
    </div>
  )
}

export default EditBook