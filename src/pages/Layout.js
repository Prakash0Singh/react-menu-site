// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../component/style.css";
import banner from '../component/Logo-image.png'
const Layout = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm bg-light">
        <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
            <img
              src={banner}
              alt="resturant logo"
              width="130"
              height="65"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-side" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-3">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link fs-3">About</Link>    
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fs-3">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      
    </>
  );
};

export default Layout;
