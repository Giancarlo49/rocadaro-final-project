import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="mynavbar navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src="./src/images/Logo/Logo.png" className="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
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
            <button className="btn btn-secondary me-2" type="submit">
              Login
            </button>
            <button className="btn btn-light">
              <i className="bi bi-cart"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
