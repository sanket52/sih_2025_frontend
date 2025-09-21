import React from "react";

const MileStone = () => {
  return (
    <div style={{backgroundImage:"url('media/earth.png')"}}>  
    <div className="container mt-5 p-1 text-center mb-5">
      <div className="row mt-5 ">
        <h1 style={{color:"white"}}>SIH Milestones</h1>
        <div className="col-2 mt-5" style={{color:"white"}}>
          <h2>13,91,884</h2>
          <h5>Participating Students</h5>
        </div>
        <div className="col-3 mt-5" style={{color:"white"}}>
          <h2>12800+</h2>
          <h5>SIH Alumni Network</h5>
        </div>
        <div className="col-2 mt-5" style={{color:"white"}}>
          <h2>6497</h2>
          <h5> Participating Institutes</h5>
        </div>
        <div className="col-3 mt-5" style={{color:"white"}}>
          <h2> 2877</h2>
          <h5>Total Problem Statements</h5>
        </div>
        <div className="col-2 mt-5" style={{color:"white"}}>
          <h2>133 </h2>
          <h5> Startups Details Submitted</h5>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MileStone;
