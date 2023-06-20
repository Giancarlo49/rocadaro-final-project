import { useState } from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalComponents from "../ModalComponents";
// import Modal from "./src/modal/Modal.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //* Zustand für das Modal-Fenster

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="mynavbar navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand ">
          <img src="../src/images/Logo/Logo.png" alt="Logo" className="logo" />
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
              <a className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Brands
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
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
  );
};

export default Navbar;
