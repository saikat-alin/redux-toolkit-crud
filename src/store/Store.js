import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "../reducer/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: bookSliceReducer,
    }
})

export default store;