import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";

import VariationsExample from "./components/footer/Footerbuttons.jsx";
import AnimationExample from "./components/footer/Endproject.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Brands from "./pages/Brands";

// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="pageContainer">
        <Home />
        <Products />
        <Brands />
      </div>

      {/*Footer-Buttons */}
      <VariationsExample />

      {/* Endproject Zeichen */}
      <AnimationExample />
    </div>
  );
};

export default App;
