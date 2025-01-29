import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { motion } from "framer-motion";
import {
    animationContainer,
    fadeLeftVariant,
    fadeRightVariant,
} from "../animations/animationUtils";
import Loader from "../components/Loader";
const apiUrl = import.meta.env.VITE_BOOKS_URL;
const apiImageUrl = import.meta.env.VITE_BOOK_IMG_URL;

function Bookdetail() {
    const { id } = useParams();
    const [book, setBook] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchBook = () => {
        setIsLoading(true);
        axios
            .get(`${apiUrl}/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchBook();
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) return <Loader />;
    return (
        <>
            {book && (
                <>
                    <InfoSection book={book} />
                    <ReviewsSection book={book} />
                    <FormSection bookId={id} fetchBook={fetchBook} />
                </>
            )}
        </>
    );
}

function InfoSection({ book }) {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={animationContainer}
            className="flex flex-col md:flex-row gap-6 mx-8 md:mx-16 mt-8 pb-4 border-b border-b-slate-400"
        >
            <motion.div variants={fadeRightVariant} className=" md:w-[200px]">
                <img src={`${apiImageUrl}/${book?.image}`} alt={book.title} />
            </motion.div>
            <motion.div variants={fadeLeftVariant}>
                <h1 className="text-4xl font-black">{book.title}</h1>
                <h2 className="mt-1 mb-3 text-2xl font-semibold text-gray-600">
                    by <em>{book.author}</em>
                </h2>
                <p className="text-lg my-2">{book.abstract}</p>
            </motion.div>
        </motion.section>
    );
}

function ReviewsSection({ book }) {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="mx-8 md:mx-16 my-8"
        >
            <motion.h2 variants={fadeLeftVariant} className="text-xl font-bold">
                Our community reviews
            </motion.h2>
            <motion.div
                initial="hidden"
                animate="visible"
                className="gap-3 mt-3 flex flex-col"
            >
                {book.reviews.map((rev, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.4,
                        }}
                        key={rev.id}
                        className="p-4 rounded-md border border-slate-400 flex flex-col gap-2 relative"
                    >
                        <p>{rev.text}</p>
                        <span>
                            <strong>Vote</strong>
                            <Rating stars={rev.vote} />
                        </span>
                        <span className="italic absolute bottom-1 right-3">
                            By {rev.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

function FormSection({ bookId, fetchBook }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [vote, setVote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const voteValue = parseInt(vote, 10);
        if (isNaN(voteValue) || voteValue < 0 || voteValue > 5) {
            setError("Il voto deve essere tra 0 e 5");
            setIsSubmitting(false);
            return;
        }

        axios
            .post(`${apiUrl}/${bookId}`, { text, name, vote: voteValue })
            .then(() => {
                setName("");
                setText("");
                setVote("");
                fetchBook();
            })
            .catch((err) => {
                console.error("Errore:", err);
                setError("Errore durante l'invio. Riprova.");
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="my-8 md:mx-16 mx-8 overflow-hidden"
        >
            <form
                onSubmit={handleSubmit}
                className="rounded-md pb-2 border border-stone-400 flex flex-col gap-3 [&>*]:px-3"
            >
                <h2 className="py-3 border-b border-b-stone-400 bg-slate-200 font-semibold text-xl">
                    Aggiungi la tua recensione
                </h2>

                {error && <div className="text-red-500 px-3">{error}</div>}

                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Nome</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="review">Recensione</label>
                    <textarea
                        className="p-2 rounded-md border border-stone-400"
                        name="review"
                        id="review"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="vote">Voto (0-5)</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="number"
                        name="vote"
                        id="vote"
                        value={vote}
                        onChange={(e) => setVote(e.target.value)}
                        min="0"
                        max="5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mr-2 rounded-md py-2 px-5 bg-blue-700 text-white self-end scale-90 hover:scale-100 disabled:opacity-50 disabled:hover:scale-90"
                >
                    {isSubmitting ? "Invio in corso..." : "Invia"}
                </button>
            </form>
        </motion.section>
    );
}

export default Bookdetail;
