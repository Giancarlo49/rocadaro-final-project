import { useState } from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalComponents from "../ModalComponents";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //* Zustand für das Modal-Fenster
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleBrandsLinkClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const brandsElement = document.getElementById("brands");
      if (brandsElement) {
        brandsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleProductsLinkClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const productsElement = document.getElementById("products");
      if (productsElement) {
        productsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <>
      <nav className="mynavbar navbar navbar-expand-lg navbar-blur">
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
                <Link to="home" className="nav-link">
                  <NavLink to="/" className="nav-link active">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </NavLink>
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

              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-secondary me-2"
                type="button"
                onClick={handleModalToggle}
              >
                Login
              </button>
              <button className="btn btn-light">
                <i className="bi bi-cart"></i>
              </button>
            </form>
          </div>
        </div>
        {/* {isModalOpen && <Modal onClose={handleModalToggle} />}{" "} */}
        {/* Zeige das Modal-Fenster, wenn isModalOpen true ist */}
        <ModalComponents
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
