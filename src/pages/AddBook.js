import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../reducer/BooksSlice";
import { useNavigate } from "react-router-dom";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author, country };
    dispatch(addBook(book));
    navigate("/show-books", { replace: false });
  };

  return (
    <div>
      <Navbar />
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="title">Title: </label><br />
          <input type="text"
            id='title'
            name='title'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label><br />
          <input type="text"
            id='author'
            name='author'
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)} />
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
        <button type='submit' className='add-button'>ADD</button>
      </form>
      <Footer />
    </div>
  )
}

export default AddBook