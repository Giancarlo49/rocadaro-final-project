import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import DarkVariantExample from "./components/carousel/Carousel.jsx";
import ImgOverlayExample from "./components/brands/Brands.jsx";
import GroupExample from "./components/cards/Cards.jsx";
import VariationsExample from "./components/footer/Footerbuttons.jsx";
import AnimationExample from "./components/footer/Endproject.jsx";
// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      {/* Carousel */}
      <DarkVariantExample />
      <br />
      <br />
      {/* BRANDS */}
      <ImgOverlayExample />
      <br />
      {/* CARDS */}
      <GroupExample />
      <br />
      <br />
      {/*Footer-Buttons */}
      <VariationsExample />
      <br />
      <br />
      {/* Endproject Zeichen */}
      <AnimationExample />
      
      

    </div>
  );
};

export default App;
