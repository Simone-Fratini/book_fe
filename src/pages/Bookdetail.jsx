import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";

const apiUrl = import.meta.env.VITE_BOOKS_URL;
const apiImageUrl = import.meta.env.VITE_BOOK_IMG_URL;

function Bookdetail() {
    const { id } = useParams();

    const [book, setBook] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${apiUrl}/${id}`)
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <Loader />;
    return (
        <>
            {book && (
                <>
                    <InfoSection book={book} />
                    <ReviewsSection book={book} />
                    <FormSection />
                </>
            )}
        </>
    );
}

function InfoSection({ book }) {
    return (
        <section className="flex flex-col md:flex-row gap-6 mx-8 md:mx-16 mt-8 pb-4 border-b border-b-slate-400">
            <div className=" md:w-[200px]">
                <img src={`${apiImageUrl}/${book?.image}`} alt={book.title} />
            </div>
            <div>
                <h1 className="text-4xl font-black">{book.title}</h1>
                <h2 className="mt-1 mb-3 text-2xl font-semibold text-gray-600">
                    by <em>{book.author}</em>
                </h2>
                <p className="text-lg my-2">{book.abstract}</p>
            </div>
        </section>
    );
}

function ReviewsSection({ book }) {
    return (
        <section className="mx-8 md:mx-16 my-8">
            <h2 className="text-xl font-bold">Our community reviews</h2>
            <div className="gap-3 mt-3 flex flex-col">
                {book.reviews.map((rev) => (
                    <div
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
                    </div>
                ))}
            </div>
        </section>
    );
}

function FormSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit-btn clicked");
    };
    return (
        <section className="my-8 md:mx-16 mx-8">
            <form
                onSubmit={handleSubmit}
                className="rounded-md pb-2 border border-stone-400 flex flex-col gap-3 [&>*]:px-3
                        "
            >
                <h2 className="py-3 border-b border-b-stone-400   bg-slate-200 font-semibold text-xl">
                    Add your review
                </h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="review">Review</label>
                    <textarea
                        className="p-2 rounded-md border border-stone-400"
                        name="review"
                        id="review"
                        required
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="vote">Vote</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="number"
                        name="vote"
                        id="vote"
                        min={0}
                        max={5}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue mr-2 rounded-md py-2 px-5 bg-blue-700 text-white self-end scale-90 hover:scale-100"
                >
                    Send
                </button>
            </form>
        </section>
    );
}

export default Bookdetail;
