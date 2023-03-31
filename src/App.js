import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Error from './pages/Error';
import Home from "./pages/Home";
import ViewBook from './pages/ViewBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<ViewBook />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
