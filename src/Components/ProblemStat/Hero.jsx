import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" text-center">
        <img
          src="./media/problem.jpg"
          alt=""
          className="img-fluid w-100"
          style={{
            height: "300px",
            objectFit: "cover",
            filter: "brightness(1)",
          }}
        />
        <div>
          <h1
            className="position-absolute top-50 start-50 translate-middle fw-bold text-white text-uppercase"
            style={{ fontSize: "70px" }}
          >
            Problem Statements
          </h1>
        </div>
      </div>

      <div
        className="container mt-5"
        style={{
          backgroundImage: "url('./media/total.jpg')",
          borderRadius: "14px",
        }}
      >
        <div className="row">
          <div className="col-5">
            <h1 style={{ color: "#f75700", fontSize: "60px" }}>
              Total Statements
            </h1>
            <p style={{ color: "white", fontSize: "25px" }}>
              As per available data
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 " style={{color:"white"}}>
            <h1 style={{fontSize:"400%"}}> 72</h1>
            <p style={{fontSize:"200%"}}>Hardware</p>
          </div>
          <div className="col-3" style={{color:"white"}}>
            <h1 style={{fontSize:"400%"}}>163</h1>
            <p style={{fontSize:"200%"}}>Software</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
