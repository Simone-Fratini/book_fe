import { IoLogOut } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function UserDropdown({ onClick }) {
    const { user } = useAuthContext();
    return (
        <nav className="border bg-blue-950/70 flex flex-col gap-2 py-3 px-2 absolute z-10 right-0 rounded-lg top-10">
            {user?.isAdmin && (
                <Link
                    to={"dashboard"}
                    className="flex items-center gap-4 capitalize py-1 px-4 border-b rounded-b-lg border-b-slate-400 hover:pb-3 hover:text-white/70 transition-all"
                >
                    <MdSpaceDashboard className="text-2xl" />
                    <span>dashboard</span>
                </Link>
            )}
            <button
                onClick={onClick}
                className="flex items-center gap-2 capitalize py-1 px-4 border-b rounded-b-lg border-b-slate-400 hover:pb-3 hover:text-gray-300 transition-all"
            >
                <IoLogOut className="text-3xl" />
                <span>logout</span>
            </button>
        </nav>
    );
}

export default UserDropdown;
