import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useAuthContext } from "../contexts/AuthContext";
import axios from "axios";
const apiLogoutUrl = import.meta.env.VITE_LOGOUT_URL;

function Navbar() {
    const { user, isLogged, setIsLogged } = useAuthContext();

    const navigate = useNavigate();
    const location = useLocation();

    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses =
        "flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300 pb-1 px-2";

    // actions
    const logout = () => {
        if (isLogged) {
            axios({
                method: "post",
                url: apiLogoutUrl,
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + user.accessToken,
                },
                data: JSON.stringify({ token: user.refreshToken }),
            })
                .then((res) => {
                    console.log(res.data);
                    setIsLogged(false);
                })
                .catch((err) => {
                    console.error(err.response.data);
                })
                .finally(() => {
                    navigate(location.pathname);
                    window.sessionStorage.removeItem("user");
                });
        }
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            {/* Hamburger Menu Button only visible on small screens */}
            <div className="flex items-baseline gap-3 md:hidden">
                <NavLink
                    onClick={logout}
                    end
                    to={!isLogged ? "/home/auth" : ""}
                    className={({ isActive }) =>
                        navLinkClasses +
                        (isActive && !isLogged ? " border-b border-white" : "")
                    }
                >
                    <FaRegUserCircle />
                    <span>{isLogged ? user.username : "Login"}</span>
                </NavLink>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white"
                >
                    <FaBars />
                </button>
            </div>

            {/* Desktop Navigation Menu (hidden on small screens) */}
            <nav className="hidden md:flex gap-1 items-center text-lg ">
                {/* daromode for desktop */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center p-2 border mr-2 rounded-full hover:bg-gray-200 hover:text-gray-500 transition duration-300"
                >
                    {darkMode ? (
                        <FiSun className="text-lg" />
                    ) : (
                        <FaMoon className="text-lg" />
                    )}
                </button>
                <NavLink
                    end
                    to="/home"
                    className={({ isActive }) =>
                        navLinkClasses +
                        (isActive ? " border-b border-white" : "")
                    }
                >
                    <FaHome className="text-xl" />
                    <span>Home</span>
                </NavLink>
                <NavLink
                    end
                    to="/home/about"
                    className={({ isActive }) =>
                        navLinkClasses +
                        (isActive ? " border-b border-white" : "")
                    }
                >
                    <IoInformationCircleOutline className="text-xl" />
                    <span>About</span>
                </NavLink>
                <NavLink
                    onClick={logout}
                    end
                    to={!isLogged ? "/home/auth" : ""}
                    className={({ isActive }) =>
                        navLinkClasses +
                        (isActive && !isLogged ? " border-b border-white" : "")
                    }
                >
                    <FaRegUserCircle />
                    <span>{isLogged ? user.username : "Login"}</span>
                </NavLink>
            </nav>

            {/* Mobile Menu (shows when isMenuOpen is true) */}
            {isMenuOpen && (
                <div className="absolute top-16 right-6 hamburger-menu bg-blue-600 text-white rounded-lg shadow-lg py-4 px-6 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <NavLink
                                end
                                to="/home"
                                className={({ isActive }) =>
                                    navLinkClasses +
                                    (isActive ? " border-b border-white" : "")
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaHome className="text-xl" />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                end
                                to="/home/about"
                                className={({ isActive }) =>
                                    navLinkClasses +
                                    (isActive ? " border-b border-white" : "")
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <IoInformationCircleOutline className="text-xl" />
                                <span>About</span>
                            </NavLink>
                        </li>
                        {/* Dark Mode Button for Mobile */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 border rounded-full hover:bg-gray-200 hover:text-gray-500 transition duration-300"
                        >
                            {darkMode ? (
                                <FiSun className="text-md" />
                            ) : (
                                <FaMoon className="text-md" />
                            )}
                        </button>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
