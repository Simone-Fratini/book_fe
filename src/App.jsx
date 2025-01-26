import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Bookdetail from "./pages/Bookdetail";
import HeroPage from "./pages/HeroPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HERO PAGE */}
        <Route path="/" Component={HeroPage} />
        
        <Route path="/home" Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="about" Component={About}></Route>
          <Route path=":id" Component={Bookdetail}></Route>
        </Route>
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
