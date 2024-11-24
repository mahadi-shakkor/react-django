import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1> Book website </h1>
      <div>
        <input type="text" placeholder="Book title...." name="" id="" />
        <input type="number" placeholder="Release date...." name="" id="" />
        <button> Add Book </button>
      </div>

      {books.map((book) => (
  <div>
    <p>Title :                {    book.bookTitels}</p>
    <p>Release Year :            {        book.release_date}</p>
  </div>
))}


    </>
  );
}

export default App;
