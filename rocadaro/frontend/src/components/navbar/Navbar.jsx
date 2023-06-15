import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
  return (
    <nav className="mynavbar navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="text container-fluid">
        <a className="navbar-brand" href="#">
          RoCaDaRo
        </a>
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
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
            {/* <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button>
              <i className="bi bi-search"></i>
            </button> */}
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Login
            </button>
            <button>
              <i className="bi bi-cart"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
