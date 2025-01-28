import { Link } from "react-router-dom";

import Navbar from "./Navbar";

function HeaderComponent() {
    return (
        <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 shadow-lg rounded-b-2xl">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    to={"/"}
                    className="font-extrabold text-xl sm:text-xl md:text-2xl lg:text-3xl"
                >
                    Book-Shop
                </Link>
                <Navbar></Navbar>
                {/* Dark Mode Button */}
            </div>
        </header>
    );
}

export default HeaderComponent;
