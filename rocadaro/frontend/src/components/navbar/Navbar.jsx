import { useState } from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalComponents from "../ModalComponents";
import { Link } from "react-scroll";
import { Outlet, useNavigate } from "react-router-dom";
import Store from "../../store/Context";
import ContactForm from "../contactFormular/ContactFormular.jsx";
import FavoritesPage from "../../pages/FavoritesPages";

const Navbar = () => {
  const {
    cart,
    handleHomeLinkClick,
    handleBrandsLinkClick,
    handleProductsLinkClick,
  } = Store();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //* Zustand für das Modal-Fenster

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <nav className="mynavbar navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand ">
            <img
              src="/images/Logo/LogoRocadaro.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMenuToggle}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarColor01"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  onClick={handleHomeLinkClick}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  onClick={handleProductsLinkClick}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="brands"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={handleBrandsLinkClick}
                >
                  Brands
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li> */}
            </ul>
            <form className="d-flex">
              <ContactForm />
              <button
                className="btn btn-secondary me-2"
                type="button"
                onClick={handleLoginClick}
              >
                <i className="bi bi-person-fill" id="loginButton"></i>
              </button>

              <div className="CartButton">
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <i className="bi bi-cart"></i>
                  <span className="total-Items">{cart.length}</span>
                </button>
              </div>
              <div className="HeartButton">
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={() => {
                    navigate("/favorites");
                  }}
                >
                  <i className="bi bi-heart-fill "></i>
                  {/* <span className="total-Items">{cart.length}</span> */}
                </button>
              </div>
            </form>
          </div>
        </div>

        <ModalComponents
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
        />
      </nav>
      <Outlet>
        <FavoritesPage path="/favorites" />
      </Outlet>
    </>
  );
};

export default Navbar;
