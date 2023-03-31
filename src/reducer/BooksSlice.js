const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
    books: [
        { id: uuidv4(), title: "Javascript", author: "Jack", country: "Canada" },
        { id: uuidv4(), title: "React", author: "Alex", country: "USA" }
    ],
};

const booksSlice = createSlice({
    name: "booksReducer",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        updateBook: (state, action) => {
            const { id, title, author, country } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
                isBookExist[0].country = country;
            }
        },
    },
})

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions

export default booksSlice.reducer