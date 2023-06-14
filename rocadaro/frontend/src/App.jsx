import "./App.css";
import DarkVariantExample from "./components/carousel/Carousel.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div>
      <Navbar />
      <DarkVariantExample />
    </div>
  );
};

export default App;
