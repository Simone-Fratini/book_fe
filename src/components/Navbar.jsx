import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useAuthContext } from "../contexts/AuthContext";
import axios from "axios";
import UserDropdown from "./UserDropdown";
const apiLogoutUrl = import.meta.env.VITE_LOGOUT_URL;

function Navbar() {
    const { user, setUser } = useAuthContext();

    const navigate = useNavigate();
    const location = useLocation();

    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    const navLinkClasses =
        "flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300 pb-1 px-2";

    const navLinkMobileClasses =
        "flex items-center gap-4 capitalize py-1 px-4 border-b rounded-b-lg border-b-slate-400 hover:pb-3 hover:text-white/70 transition-all";

    // actions
    const logout = () => {
        if (user) {
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
                    setUser(null);
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

    const handleUserClick = () => {
        if (user) {
            setIsUserOpen((curr) => !curr);
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
                <div className="relative">
                    <NavLink
                        onClick={handleUserClick}
                        end
                        to={!user ? "/home/auth" : location.pathname}
                        className={({ isActive }) =>
                            navLinkClasses +
                            (isActive && !user ? " border-b border-white" : "")
                        }
                    >
                        <FaRegUserCircle />
                        <span>{user ? user?.username : "Login"}</span>
                    </NavLink>
                    {/* dropdown */}
                    {user && isUserOpen && <UserDropdown onClick={logout} />}
                </div>
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
                    className="p-2 w-[50px] mr-2 self-start border rounded-full hover:bg-gray-200 hover:text-gray-500 flex justify-between transition duration-300"
                >
                    {darkMode ? (
                        <>
                            <span></span>
                            <FiSun className="text-md block self-end" />
                        </>
                    ) : (
                        <FaMoon className="text-md" />
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
                <div className="relative">
                    <NavLink
                        onClick={handleUserClick}
                        end
                        to={!user ? "/home/auth" : location.pathname}
                        className={({ isActive }) =>
                            navLinkClasses +
                            (isActive && !user ? " border-b border-white" : "")
                        }
                    >
                        <FaRegUserCircle />
                        <span>{user ? user?.username : "Login"}</span>
                    </NavLink>
                    {/* dropdown */}
                    {user && isUserOpen && <UserDropdown onClick={logout} />}
                </div>
            </nav>

            {/* Mobile Menu (shows when isMenuOpen is true) */}
            {isMenuOpen && (
                <div className="absolute top-16 right-6 hamburger-menu border bg-blue-950/70 text-white rounded-lg shadow-lg py-4 px-2 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <NavLink
                                end
                                to="/home"
                                className={({ isActive }) =>
                                    navLinkMobileClasses +
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
                                    navLinkMobileClasses +
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
                            className="p-2 w-[50px] mr-2 self-start border rounded-full hover:bg-gray-200 hover:text-gray-500 flex justify-between transition duration-300"
                        >
                            {darkMode ? (
                                <>
                                    <span></span>
                                    <FiSun className="text-md block self-end" />
                                </>
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
