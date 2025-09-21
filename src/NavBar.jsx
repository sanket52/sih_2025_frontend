import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 fs-5 fw-bold" style={{marginLeft:"18%"}}>
        <Link className="navbar-brand" href="#">
          <img src="./media/nav.png" alt=""  style={{width:"50%"}}/>
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}}to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}} to="/problem">
                Problem
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}} to="/project">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}} to="/faq">
                FAQS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-5" style={{color:"#0D1D6A"}} to="/contact">
                ContactUs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
