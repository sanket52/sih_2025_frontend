import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#181818" }}>
      <div className="container" >
        <div className="row">
          <div className="col-6">
            <h2 className="text-white">FOLLOW US</h2>
            <span className="mt-5" style={{color:"white"}}>
              <i className="fa-brands fa-facebook-f fa-2x"></i>
              <i className="fa-brands fa-instagram mx-3 fa-2x"></i>
              <i className="fa-brands fa-twitter mx-3 fa-2x"></i>
              <i className="fa-brands fa-linkedin-in mx-3 fa-2x"></i>
            </span>
            <p className="text-white mt-3">© 2025-26 Smart India Hackathon. All rights reserved</p>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <h2 className="text-white">CONTACT US</h2>
            <span className="text-white">
              <i className="fa-solid fa-phone">&nbsp;+91 11 29581239 &nbsp; +91 11 29581235</i>
            </span>

            <span className="text-white fs-5" >
              <i className="fa-solid fa-envelope" style={{fontSize:"12px"}}>&nbsp; sih@aicte-india.org,  &nbsp;hackathon@aicte-india.org</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
