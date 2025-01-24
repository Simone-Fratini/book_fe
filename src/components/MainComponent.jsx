import { useState, useEffect } from "react";

import Card from "./Card";
import axios from "axios";

export default function MainComponent() {
  const [books, setBooks] = useState([]);

  const apiUrl = import.meta.env.VITE_BOOKS_URL;

  const fetchBooks = () => {
    axios.get(`${apiUrl}`).then((res) => {
      setBooks(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-primary">Bool Books</h1>
      <h2 className="py-2 fst-italic">The nerdest book comunity</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
