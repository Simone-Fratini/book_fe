import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

const apiUrl = import.meta.env.VITE_BOOKS_URL;
const apiImageUrl = import.meta.env.VITE_BOOK_IMG_URL;

function Bookdetail() {
    const { id } = useParams();

    const [book, setBook] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // todo: loading
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

    if (isLoading) return <div>Loading . . .</div>;
    return (
        <>
            {book && (
                <>
                    <section className="flex flex-wrap gap-6 mx-8 md:mx-16 mt-8 pb-4 border-b border-b-slate-400">
                        <div className=" md:w-[200px]">
                            <img
                                src={`${apiImageUrl}/${book?.image}`}
                                alt={book.title}
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black">
                                {book.title}
                            </h1>
                            <h2 className="mt-1 mb-3 text-2xl font-semibold text-gray-600">
                                by <em>{book.author}</em>
                            </h2>
                            <p className="text-lg my-2">{book.abstract}</p>
                        </div>
                    </section>
                    <ReviewsSection book={book}/>
                    
                </>
            )}
        </>
    );
}


function ReviewsSection({book}){
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

//   "id": 13,
//   "book_id": 5,
//   "name": "Mia",
//   "vote": 5,
//   "text": "A gripping and complex tale.",
//   "created_at": "2024-11-26T09:58:09.000Z",
//   "updated_at": "2024-11-26T09:58:09.000Z"
// },

export default Bookdetail;
