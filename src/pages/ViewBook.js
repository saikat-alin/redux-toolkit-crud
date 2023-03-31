import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { deleteBook } from '../reducer/BooksSlice';

const ViewBook = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    console.log(books)

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <Navbar />
            <h2>List of Books</h2>
            <table>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Title</th>
                        <th>Author</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) => {
                        const { id, title, author, country } = book;
                        return (
                            <tr key={id}>
                                {/* <td>{id}</td> */}
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>{country}</td>
                                <td>
                                    <Link to="/edit-book" state={{ id, title, author, country }}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => { handleDeleteBook(id) }}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default ViewBook