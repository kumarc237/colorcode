import React from "react";
import contact from "../assets/contact.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar- bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Color
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-2">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
             
            </ul>
            <div className="contact-container dropdown-toggle" data-bs-toggle="dropdown">
              <img src={contact} className="contact-img" />
              </div>
             
              <ul className="dropdown-menu custom-menu">
                <li className="px-3 py-2"><h6>About</h6></li>
                <li className="px-3 py-2"><h6>Sign In</h6></li>
                <li className="px-3 py-2"><h6>Sign Up</h6></li>

              </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
