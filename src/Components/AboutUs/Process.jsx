// Process.js
import React from "react";
import Team from "./Team";

const Process = () => {
  const teamMembers = [
    {
      img: "./media/sitha.png",
      name: "Mr. Pradeep Dhage",
      designation: "Assistant Innovation Director, MoE's Innovation Cell",
      email: "innovationofficer2@aicte-india.org",
      phone: "01129581241",
      linkedin: "#",
    },
    {
      img: "./media/yogesh.png",
      name: "Mr. Sarim Moin",
      designation: "Innovation Officer, MoE's Innovation Cell",
      email: "innovationofficer2@aicte-india.org",
      phone: "01129581241",
      linkedin: "#",
    },
    {
      img: "./media/abhay.png",
      name: "Mr. Ankush Sharma",
      designation: "Innovation Officer, MoE's Innovation Cell",
      email: "ankush.sharma@aicte-india.org",
      phone: "01129581223",
      linkedin: "#",
    },
    {
      img: "./media/sourabh.png",
      name: "Mr. Sourabh R. Nirmale",
      designation: "Regional Consultant, MoE's Innovation Cell",
      email: "rc3.mic@aicte-india.org",
      phone: "01129581239",
      linkedin: "#",
    },

     {
      img: "./media/sourabh.png",
      name: "Mr. Sourabh R. Nirmale",
      designation: "Regional Consultant, MoE's Innovation Cell",
      email: "rc3.mic@aicte-india.org",
      phone: "01129581239",
      linkedin: "#",
    },
     {
      img: "./media/lakshay.png",
      name: "Mr. Sourabh R. Nirmale",
      designation: "Regional Consultant, MoE's Innovation Cell",
      email: "rc3.mic@aicte-india.org",
      phone: "01129581239",
      linkedin: "#",
    },

     {
      img: "./media/sourabh.png",
      name: "Mr. Sourabh R. Nirmale",
      designation: "Regional Consultant, MoE's Innovation Cell",
      email: "rc3.mic@aicte-india.org",
      phone: "01129581239",
      linkedin: "#",
    },
    {
      img: "./media/sarim.png",
      name: "Mr. Sourabh R. Nirmale",
      designation: "Regional Consultant, MoE's Innovation Cell",
      email: "rc3.mic@aicte-india.org",
      phone: "01129581239",
      linkedin: "#",
    },
  ];

  return (
    <div className="container mb-5">
      <div className="d-flex flex-wrap justify-content-center mb-5">
        {teamMembers.map((member, index) => (
          <Team key={index} {...member} />
        ))}
      </div>
      <h1 className="text-center" style={{color:"#d90000ff"}}><i>THANK'S TO ALL</i></h1>
    </div>
  );
};

export default Process;
