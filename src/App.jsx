import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Bookdetail from "./pages/Bookdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="about" Component={About}></Route>
          <Route path=":id" Component={Bookdetail}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
