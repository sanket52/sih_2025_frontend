import React from "react";
import Theme from "./Theme";
import SmartIndia from "./SmartIndia";
import Flow from "./Flow";
import MileStone from "./MileStone";
import Organisers from "./Organisers";
import Smart from "./Smart";


const Home = () => {
  return (
    <div>
     
      <Theme />
     <Smart/>
      <SmartIndia />
      <Flow />
      <MileStone />
      <Organisers/>
    </div>
  );
};

export default Home;
