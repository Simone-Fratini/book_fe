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
    <div className="mx-16 my-4">
      <h1 className="text-5xl font-bold tracking-wide text-blue-600">Bool Books</h1>
      <h2 className="py-2 text-3xl italic font-semibold">The nerdest book comunity</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:mx-24">
        {books.map((book) => (
          <div key={book.id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
