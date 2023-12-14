import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
