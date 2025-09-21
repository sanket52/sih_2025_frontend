import React from "react";
import Teams from "./Teams";
import "./Struct.css";

const sportData  = [
  {
    title: "Q. 1. What is the Smart India Hackathon?",
    content:
      "Smart India Hackathon is an initiative by the Government of India aimed at addressing pressing problems faced by government departments and private organizations through innovative solutions developed by students.",
  },
  {
    title: "Q. 2. Who can participate in SIH?",
    content:
      "All students from AICTE/UGC approved institutions, universities, and colleges across India are eligible to participate in the Smart India Hackathon.",
  },
  {
    title: "Q. 3. What are the types of problem statements in SIH?",
    content:
      "Problem statements are provided by central ministries, state governments, and private organizations, covering areas like healthcare, agriculture, education, smart systems, transport, and more.",
  },
  {
    title: "Q. 4. Is there any registration fee to participate?",
    content:
      "No, there is no registration fee. Participation in the Smart India Hackathon is completely free of cost for students.",
  },
  {
    title: "Q. 5. How are the winning teams rewarded?",
    content:
      "Winning teams receive cash prizes, certificates, and potential opportunities for project implementation with government or industry partners.",
  },
  {
    title: "Q. 6. Can final-year students participate?",
    content:
      "Yes, final-year students are welcome to participate. Even if they graduate during the project development stage, they can continue contributing remotely.",
  },
  {
    title: "Q. 7. What kind of support do teams get during SIH?",
    content:
      "Teams are mentored by domain experts, industry professionals, and government officials who provide technical guidance, feedback, and evaluation throughout the hackathon.",
  },
  {
    title: "Q. 8. How long does the hackathon last?",
    content:
      "The Smart India Hackathon is usually conducted as a 36-hour non-stop event where student teams work intensively to develop working prototypes of their solutions.",
  }
];

const Sport = () => {
  return (
    <div style={{backgroundImage:"url('./media/sponsar.png')", opacity:1}}> 
    <div className="faq-section">
      <h1 className="faq-title">FAQ for Teams</h1>
      <div>
        {sportData.map((item, index) => (
          <Teams key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
     </div>
  );
};

export default Sport;
