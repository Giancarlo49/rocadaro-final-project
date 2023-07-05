import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ListCart from "./pages/ListCart";
import AboutUsPage from "./pages/Footer/AboutUsPage";
import AGB from "./pages/Footer/AGB";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="cart" element={<ListCart />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="AGB" element={<AGB />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
