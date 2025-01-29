import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Bookdetail from "./pages/Bookdetail";
import HeroPage from "./pages/HeroPage";
import ErrorPage from "./pages/ErrorPage";
import Auth from "./pages/Auth";
import { AuthContextProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    {/* HERO PAGE */}
                    <Route path="/" Component={HeroPage} />

                    <Route path="/home" Component={DefaultLayout}>
                        <Route index Component={HomePage}></Route>
                        <Route path="about" Component={About}></Route>
                        <Route path=":id" Component={Bookdetail}></Route>
                        <Route path="auth" Component={Auth} />
                        <Route path="dashboard" Component={Dashboard} />
                    </Route>
                    <Route path="*" Component={ErrorPage} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
