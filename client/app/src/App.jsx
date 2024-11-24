import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);


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
  const addBook = async () => {
    const bookData = {
      title,        // Ensure 'title' is defined in the component's state
      release_year: releaseYear,  // Ensure 'releaseYear' is defined in the component's state
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      // Update your component's state or UI here
    } catch (err) {
      console.log("Error:", err.message);
    }
  };
  



  return (
    <>
      <h1> Book website </h1>
      <div>
        <input onChange={(e) => setTitle(e.target.value)}  type="text" placeholder="Book title...." name="" id="" />
        <input onChange={(e) => setReleaseYear(e.target.value)}  type="number" placeholder="Release date...." name="" id="" />
        <button onClick={addBook}> Add Book </button>
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
