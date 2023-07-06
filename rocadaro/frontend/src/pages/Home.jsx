import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import DarkVariantExample from "../components/carousel/Carousel";
import Products from "./Products";
import Werbung from "../components/werbung/Werbung";
import CreateUser from "../components/CreateUser";
import Brands from "./Brands";
import VariationsExample from "../components/footer/FooterButtons";
import AnimationExample from "../components/footer/Endproject";
import Searchbar from "../components/Seachbar";
import "bootstrap-icons/font/bootstrap-icons.css";


const Home = () => {
  return (
    <section className="page" id="home">
      <Searchbar />
      <DarkVariantExample />
      <Werbung />
      <CreateUser />
      <Products />
      <Brands />
      <VariationsExample />
      <AnimationExample />
    </section>
  );
};

export default Home;
