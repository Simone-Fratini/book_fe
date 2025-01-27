import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import axios from "axios";
import { fadeDownVariant, animationContainer } from "../animations/animationUtils";

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

  return (
    <div className="mx-16 my-4">
      <motion.div initial="hidden" animate="visible"  variants={animationContainer} className="text-center pb-10">
        <motion.h1 variants={fadeDownVariant} className="text-5xl font-bold tracking-wide text-blue-600">
          Bool Books
        </motion.h1>
        <motion.h2 variants={fadeDownVariant} className="py-2 text-3xl italic font-semibold">
          The nerdest book community
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-24">
  
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.4,
                ease: "easeOut"
              }}
            >
              <Card book={book} />
            </motion.div>
          ))}

      </div>
    </div>
  );
}