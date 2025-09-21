import React, { useState } from "react";


const Teams = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsActive(!isActive)} >
      <div className="faq-header">
        <div>{title}</div>
        <div className="faq-toggle">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="faq-content">{content}</div>}
    </div>
  );
};

export default Teams;
