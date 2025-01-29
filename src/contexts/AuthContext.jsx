import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState(false);

    // console.log(window.sessionStorage.getItem("user"));
    useEffect(() => {
        const currUser = JSON.parse(window.sessionStorage.getItem("user"));
        console.log(currUser)
        setUser(currUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthContextProvider, useAuthContext };
