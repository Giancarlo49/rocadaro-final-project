<<<<<<< HEAD
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           RoCaDaRo
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarColor01"
//           aria-controls="navbarColor01"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarColor01">
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">
//                 Home
//                 <span className="visually-hidden">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#"></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 href="#"
//                 role="button"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <div className="dropdown-menu">
//                 <a className="dropdown-item" href="#">
//                   Action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   Separated link
//                 </a>
//               </div>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input
//               className="form-control me-sm-2"
//               type="search"
//               placeholder="Search"
//             />
//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-darkblue fixed-top"
      data-bs-theme="light"
    >
=======
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
  return (
    <nav className="mynavbar navbar navbar-expand-lg " data-bs-theme="dark">
>>>>>>> 2da44ec97bdc436c502f05dcb0504ec2d5edc19c
      <div className="container-fluid">
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
<<<<<<< HEAD
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
=======
                Contact
>>>>>>> 2da44ec97bdc436c502f05dcb0504ec2d5edc19c
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
