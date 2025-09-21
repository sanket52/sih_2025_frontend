import React from "react";

const Flow = () => {
  return (
    <div className="mt-5 ">
      <h1 className="mt-5 text-center mb-5" style={{ color: "#F75700" }}>
        SIH PROCESS FLOW AND TIMELINE
      </h1>

      <img src="./media/india.png" alt="" style={{ margin: "0rem 27rem"}} />

      <h1 className="text-center" style={{ color: "#F75700" }}>
        Why SIH is important for Government department <br />
        and Corporate department
      </h1>
      <div className="container mt-5 text-center mb-5">
        <div className="row">
          <div className="col-3">
            <img src="./media/bulb.png" alt="" style={{ width: "100px" }} />
            <h3>Innovative Solutions</h3>
            <p>
              Get innovative solutions to your problems in cost effective ways
              Opportunity to be a part of Nation Building Opportunity to brand
              your company.
            </p>

            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#f50e0eff", // dark gray or use 'black'
                width: "100%",
                margin: "20px 0",
              }}
            />
          </div>
          <div className="col-3">
            <img src="./media/monitor.png" alt="" style={{ width: "65px" }} />
            <h3>Recognition and visibility</h3>
            <p>
              Nationally Recognition and visibility for your company across all
              premier institutions in India
            </p>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#f50e0eff", // dark gray or use 'black'
                width: "100%",
                margin: "20px 0",
              }}
            />
          </div>
          <div className="col-3">
            <img src="./media/box.png" alt="" style={{ width: "70px" }} />
            <h3>Out-of-the-box solutions</h3>
            <p>
              Talented youngsters from all over the country offer out-of-the-box
              solutions to your problems
            </p>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#f50e0eff", // dark gray or use 'black'
                width: "100%",
                margin: "20px 0",
              }}
            />
          </div>
          <div className="col-3">
            <img src="./media/arrow.png" alt="" style={{ width: "60px" }} />
            <h3>Innovation Movement Opportunity</h3>
            <p>
              Be part of World’s biggest Open Innovation Movement Opportunity to
              work with some of the best talents in the country
            </p>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#f50e0eff", // dark gray or use 'black'
                width: "100%",
                margin: "20px 0",
              }}
            />
          </div>
        </div>

        
       
      </div>
    </div>
  );
};

export default Flow;
