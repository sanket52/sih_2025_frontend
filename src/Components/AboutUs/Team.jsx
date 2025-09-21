
import React from "react";




const Team = ({ img, name, designation, email, phone}) => {
  return (
    <div
      className="card text-center border-5px shadow-sm p-5 m--1"
      style={{ borderRadius: "15px", width: "250px", height:"500px"}}
    >
      <img
        src={img}
        alt={name}
        className="rounded-circle mx-auto p-1"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h5 className="mt-3 fw-bold"> {name}</h5>
      <h6 className="mb-1"> {designation}</h6>
      <p> <i className="fa-solid fa-envelope "></i> {email}</p>
      <p><i className="fa-solid fa-phone"></i>{phone}</p>
      <p><i className="fa-brands fa-linkedin-in"></i></p>

    </div>
  );
};

export default Team;
