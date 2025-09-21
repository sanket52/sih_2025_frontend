import React from "react";
import { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div style={{fontSize:25}}>{title}</div>
          <div  className="fs-5">{isActive ? "-" : "+"}</div>
        </div>
         {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordian;
