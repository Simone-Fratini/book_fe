import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Bookdetail() {
    const { id } = useParams();

    const [book, setBook] = useState();

    // todo: loading
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BOOKS_URL}/${id}`)
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section>
            <div className="w-[200px] h-[300px] bg-red-300">
                <img src="" alt="" />
            </div>
            <div>
                <h1></h1>
            </div>
        </section>
    );
}

export default Bookdetail;
