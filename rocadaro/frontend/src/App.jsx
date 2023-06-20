import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";

import VariationsExample from "./components/footer/Footerbuttons.jsx";
import AnimationExample from "./components/footer/Endproject.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
// import { Routes, Route } from "react-router-dom";

// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Home/>
        <Products/>
        <Brands/>
      
     

      {/*Footer-Buttons */}
      <VariationsExample />

      {/* Endproject Zeichen */}
      <AnimationExample />
    </div>
  );
};

export default App;
