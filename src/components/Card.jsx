import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Card({ book, cardAnimation }) {
  

  return (
    <motion.div
      variants={cardAnimation}
      className="p-4 w-full"
    >
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
            <h3 className="text-2xl font-semibold text-gray-800">{book.title}</h3>
            <h4 className="text-lg text-gray-600 italic mt-2">{book.author}</h4>
            <p className="text-gray-700 mt-4 text-sm line-clamp-3">{book.abstract}</p>
          </div>
          <Link to={`/home/${book.id}`} className="block mt-6">
            <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors duration-200">
              Dettagli
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
