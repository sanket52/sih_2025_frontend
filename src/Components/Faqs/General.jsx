import React from "react";
import Accordian from "./Accordian";
import "./Style.css";

const accData = [
  {
    title: "Q. 1. What is the Smart India Hackathon?",
    content:
      "Smart India Hackathon is an initiative by the Government of India aimed at addressing pressing problems faced by government departments and private organizations through innovative solutions developed by students.",
  },
  {
    title: "Q. 2. When did the Smart India Hackathon start?",
    content:
      "Smart India Hackathon started in 2017 with only a software chapter. In 2018 the hardware chapter was introduced. Four successful editions have been completed namely SIH2017, SIH 2018, SIH 2019, SIH 2022, SIH 2023 and SIH2024. Due to COVID-19 SIH2020 was cancelled. Now Smart India Hackathon is at its 8th edition.",
  },

  {
    title: "Q. 3. Who can submit problem statements in this hackathon?",
    content:
      "Problem statements can be submitted by different central government ministries, departments, state government ministries/ departments, PSUs, private bodies & NGOs.",
  },

  {
    title:
      "Q. 4. Can an individual in India, such as someone working in a private company, pose a challenge or submit a problem statement? What are the financial implications?",

    content:
      "No individual is allowed to pose challenges otherwise. However, if an individual is registered as a proprietor firm then he may submit problem statements in the name of his firm; What are the financial implications? An amount of Rs 2.50 Lakh for Software and Rs. 3.55 Lakh for Hardware per problem statement shall be given by the organisation posing the challenges. In addition to this amount, registration fee of Rs 25000 /- per company is applicable. Registration fee is only applicable for private companies, PSU, MSME, NGO etc. There is no registration fee for government departments/ministries/attached offices of ministries.",
  },

  {
    title: "Q. 5. Can University or Institute Submit PS Under SIH 2025 ?",
    content:
      "No, University/institutes cannot submit PS under SIH 2025. However, they can nominate students from their institute to participate in this hackathon or nominate themselves as nodal centers to organize and support in this hackathon.",
  },
];
const General = () => {
  return (
    <div style={{backgroundImage:"url('./media/sponsar.png')", opacity:1 }}>
      <div className="container mt-5 mb-5">
        <div className="row" style={{ color: "#F75700" }}>
          <div className="col-6 mt-5">
          
            <h1>General FAQ</h1>
          </div>
          <div className="col-6 mt-5">
            <button style={{ border: "2px solid black", backgroundColor: "#F75700" ,marginLeft:"80%",borderRadius:"20px",width:"25%", color:"white",fontSize:23}}>
              RegisterHere
            </button>
          </div>
        </div>
      </div>
      <div className="accordion mx-5">
        {accData.map((item,index)=>
        (
          <Accordian key={index} title={item.title} content={item.content}/>
      ))}
      </div>

    </div>
  );
};

export default General;
