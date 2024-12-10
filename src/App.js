import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Borrow from './pages/Borrow';
import Return from './pages/Return';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BorrowRecords from './components/BorrowRecords';




function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/return" element={<Return />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit" element={<EditBook />} />
          <Route path="/borrow-records" element={<BorrowRecords />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
