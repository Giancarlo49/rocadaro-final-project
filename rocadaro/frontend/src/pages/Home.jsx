import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import DarkVariantExample from "../components/carousel/Carousel";
import Karten from "../components/karten/Karten";
import Products from "./Products";
import CreateUser from "../components/CreateUser";
import Brands from "./Brands";
import VariationsExample from "../components/footer/FooterButtons";
import AnimationExample from "../components/footer/Endproject";
import Searchbar from "../components/Seachbar";
import "bootstrap-icons/font/bootstrap-icons.css";

// import DarkVariantExample from "./components/carousel/images/Carousel.jsx";

const Home = () => {
  return (
    <section className="page" id="home">
      <Searchbar />
      <DarkVariantExample />
      <CreateUser />
      <Products />
      <Karten />
      <Brands />
      <VariationsExample />
      <AnimationExample />
    </section>
  );
};

export default Home;
