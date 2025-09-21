import React from "react";

const Ask = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <h1
            style={{ marginLeft: "30%", marginTop: "-80%", color: "#002449" }}
          >
            Ask a Question
          </h1>
          <div className="mt-4" style={{ marginLeft: "30%" }}>
            <select
              name="options"
              id=""
              style={{
                width: "150%",
                height: 50,
                border: "2px solid rgba(235, 216, 212, 0.92)",
              }}
            >
              <option value="">Select Category</option>
              <option value="">Partners</option>
              <option value="">Sponsors</option>
              <option value="">SPDC</option>
              <option value="">Join SIH</option>
              <option value="">Others</option>
            </select>

            <form action="/action">
              <input className="mt-3"
                type="text"
                placeholder="Your Name"
                style={{
                  width: "150%",
                  height: 60,
                  border: "2px solid rgba(235, 216, 212, 0.92)",
                }}
              />
              <br />
              <input className="mt-3 mb-3"
                type="text"
                placeholder="Your Email"
                style={{
                  width: "150%",
                  height: 60,
                  border: "2px solid rgba(235, 216, 212, 0.92)",
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Messages"
                style={{
                  width: "150%",
                  height: 250,
                  border: "2px solid rgba(235, 216, 212, 0.92)",
                }}
              />
            </form>
          </div>
          <button className="mt-5" style={{backgroundColor:"#F75700",marginLeft:"30%", borderRadius:"14px" , border:"0px", fontSize:"25px", color:"white"}}>Send Messages</button>
        </div>
      </div>
    </div>
  );
};

export default Ask;
