import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import axios from "axios";
import {
    fadeDownVariant,
    animationContainer,
} from "../animations/animationUtils";
import Loader from "./Loader";
import PaginationRounded from "./PaginationRounded";
const apiUrl = import.meta.env.VITE_BOOKS_URL;

export default function MainComponent() {
    const [books, setBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isPageChanged, setIsPageChanged] = useState(false);

    const fetchBooks = (page) => {
        setIsLoading(true);
        axios
            .get(`${apiUrl}?page=${page}`)
            .then((res) => {
                setBooks(res.data.books);
                setTotalBooks(res.data.total_books);
                window.scrollTo(0, 0);
                window.sessionStorage.setItem("page", page);
            })
            .catch((err) => console.error("Errore nel fetch dei libri:", err))
            .finally(() => {
                setIsLoading(false);
                setIsPageChanged(false);
            });
    };

    useEffect(() => {
        if (isPageChanged) {
            // situazione paginazione libri 
            fetchBooks(page);
        } else {
            // situazione navigazione tra routes diversi
            const currPage = parseInt(window.sessionStorage.getItem("page"));
            setPage(currPage)
            fetchBooks(currPage || 1);
        }
    }, [page]);

    if (isLoading) return <Loader />;

    return (
        <section className="mx-16 my-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={animationContainer}
                className="text-center pb-10"
            >
                <motion.h1
                    variants={fadeDownVariant}
                    className="text-5xl font-bold tracking-wide text-blue-600"
                >
                    Bool Books
                </motion.h1>
                <motion.h2
                    variants={fadeDownVariant}
                    className="py-2 text-3xl italic font-semibold"
                >
                    The nerdest book community
                </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:mx-20 2xl:mx-52 auto-rows-fr">
                {books.map((book, index) => (
                    <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.4,
                            ease: "easeOut",
                        }}
                    >
                        <Card book={book} />
                    </motion.div>
                ))}
            </div>
            {/* pagination */}
            <div className="flex justify-center mt-8 mb-4">
                <PaginationRounded
                    count={Math.ceil(totalBooks / 6)}
                    setIsLoading={setIsLoading}
                    setBooks={setBooks}
                    page={page}
                    setPage={setPage}
                    setIsPageChanged={setIsPageChanged}
                />
            </div>
        </section>
    );
}
