import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import axios from "axios";

export default function MainComponent() {
  const [books, setBooks] = useState([]);

  const apiUrl = import.meta.env.VITE_BOOKS_URL;

  const fetchBooks = () => {
    axios
      .get(apiUrl)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Errore nel fetch dei libri:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Variants 
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="mx-16 my-4">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold tracking-wide text-blue-600">
          Bool Books
        </h1>
        <h2 className="py-2 text-3xl italic font-semibold">
          The nerdest book community
        </h2>
      </div>
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-24"
      >
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </motion.div>
    </div>
  );
}
