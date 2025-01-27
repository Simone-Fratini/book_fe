import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

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

  // Varianti
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5,
      },
    },
  };
  const cardAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
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
        // variants={containerAnimation}
        transition={{ staggerChildren: 2, delayChildren: 1 }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-24"
      >
        {books.map((book) => (
          //<Card cardAnimation={cardAnimation} key={book.id} book={book} />
          <motion.div variants={cardAnimation} className="p-4 w-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-[500px] flex flex-col">
              <div className="relative w-full h-[250px] bg-gray-100">
                <img
                  src={`${import.meta.env.VITE_BOOK_IMG_URL}/${book.image}`}
                  className="w-full h-full object-contain"
                  alt={book.title}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {book.title}
                  </h3>
                  <h4 className="text-lg text-gray-600 italic mt-2">
                    {book.author}
                  </h4>
                  <p className="text-gray-700 mt-4 text-sm line-clamp-3">
                    {book.abstract}
                  </p>
                </div>
                <Link to={`/home/${book.id}`} className="block mt-6">
                  <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors duration-200">
                    Dettagli
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
