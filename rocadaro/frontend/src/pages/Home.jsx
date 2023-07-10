import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import Carousel from "../components/carousel/Carousel";
import Products from "./Products";
import Werbung from "../components/werbung/Werbung";
import CreateUser from "../components/CreateUser";
import Brands from "./Brands";
import VariationsExample from "../components/footer/FooterButtons";
import AnimationExample from "../components/footer/Endproject";
import Searchbar from "../components/Seachbar";
import Garantise from "../components/garantise/Garantise";
import "bootstrap-icons/font/bootstrap-icons.css";


const Home = () => {
  return (
    <section className="page" id="home">
      {/* <Searchbar /> */}
      <Carousel />
      <CreateUser />
      <Products />
      <Werbung />
      <Brands />
      <Garantise />
      <VariationsExample />
      <AnimationExample />
    </section>
  );
};

export default Home;
