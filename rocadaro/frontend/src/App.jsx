import "./App.css";
import DarkVariantExample from "./components/carousel/Carousel.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import ImgOverlayExample from "./components/footer/Footer.jsx";
import GroupExample from "./components/brands/Brands.jsx";
import VariationsExample from "./components/cards/Cards.jsx";
import AnimationExample from "./components/footer/Footer4";
// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <DarkVariantExample />
      <br />
      <br />
      <ImgOverlayExample />
      <br />
      <GroupExample />
      <br />
      <br />
      <VariationsExample />
      <br />
      <br />
      <AnimationExample />
      
      

    </div>
  );
};

export default App;
