import axios from "axios";
import { useRef } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const apiLoginUrl = import.meta.env.VITE_LOGIN_URL;

function Auth() {
    const { setUser } = useAuthContext();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    //  actions
    const handleAuthSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (username && password) {
            axios({
                method: "post",
                url: apiLoginUrl,
                headers: { "Content-Type": "application/json" },
                data: {
                    username: username,
                    password: password,
                },
            })
                .then((res) => {
                    console.log("login succeded");
                    setUser(res.data);
                    navigate("/home", { state: res.data });
                })
                .catch((err) => console.error(err.response.data));
        } else {
            console.error("username or password invalid!");
        }
    };
    return (
        <>
            <section className="login-section absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl uppercase font-black text-blue-600 tracking-wider my-3">
                    login
                </h1>
                <form
                    onSubmit={handleAuthSubmit}
                    className="flex flex-col gap-4 p-4 border rounded-lg border-slate-400 [&_label]:text-xl [&_label]:text-white bg-gradient-to-br from-slate-900 to-slate-600"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="login">username</label>
                        <input
                            ref={usernameRef}
                            className="p-2 rounded-md border border-stone-400"
                            type="text"
                            id="login"
                            name="login"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">password</label>
                        <input
                            ref={passwordRef}
                            className="p-2 rounded-md border border-stone-400"
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-600 hover:bg-blue-800 scale-95 hover:scale-100 uppercase text-white text-2xl font-bold tracking-wider rounded-lg"
                    >
                        login
                    </button>
                </form>
            </section>
        </>
    );
}

export default Auth;
