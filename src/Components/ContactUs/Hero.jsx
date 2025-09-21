import React from "react";

const Hero = () => {
  return (
    <div className="container p-3">
      <div className="row p-2">
        <div className="col-6"></div>
        <div className="col-6" style={{ marginLeft: "72%", marginTop: "-50%" }}>
          <p style={{ fontSize: "170%" }}>
            <i
              className=" fa-regular fa-envelope  fa-40 mb-3"
              style={{ marginRight: "20px", color: "#F75700" }}
            ></i>
            sih@aicte-india.org, hackathon@aicte-india.org{" "}
          </p>

          <p style={{ fontSize: "170%" }}>
            <i
              className="fa-solid fa-phone mb-3"
              style={{
                marginRight: "20px",
                color: "#F75700",
                fontSize: "110%",
              }}
            ></i>
            +91 011-29581239, +91 011-29581235
          </p>

          <p style={{ fontSize: "170%" }}>
            <i
              className="fa-brands fa-twitter mb-3"
              style={{ marginRight: "20px", color: "#F75700" }}
            ></i>
            @sanket123
          </p>

          <p style={{ fontSize: "170%" }}>
            <i
              className="fa-brands fa-facebook-f mb-3"
              style={{ marginRight: "20px", color: "#F75700" }}
            ></i>
            mhasdhvanjiaktu
          </p>

          <p style={{ fontSize: "170%" }}>
            <i
              className="fa-brands fa-instagram mb-3"
              style={{ marginRight: "20px", color: "#F75700" }}
            ></i>
            mhd.abdulla!@#
          </p>
          <p style={{ fontSize: "170%" }}>
            <i
              className="fa-solid fa-location-dot"
              style={{
                marginRight: "20px",
                color: "#F75700",
                fontSize: "170%",
              }}
            ></i>
            MOE's Innovation Cell, AICTE, New Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
