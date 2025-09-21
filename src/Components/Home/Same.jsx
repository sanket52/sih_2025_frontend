import React from "react";

const Same = () => {
  return (
    <div   style={{ backgroundColor: "#fff6ee", margin: "0%", padding: "0%" }}> 
    <div className="container mt-5 mb-5">
      <div className="row">
        <div
        
          className="mb-5"
        >
          <h1 className="mt-5" style={{ color: "#1f71c4ff" }}>
            WHAT IS SIH?
          </h1>
          <p style={{ fontWeight: "bold", color: "#002449" }}>
            Smart India Hackathon (SIH) is a premier nationwide initiative
            designed to engage students in solving some of the most pressing
            challenges faced in everyday life. Launched to foster a culture of
            innovation and practical problem-solving, SIH provides a dynamic
            platform for students to develop and showcase their creative
            solutions to real-world problems. By encouraging participants to
            think critically and innovatively, the hackathon aims to bridge the
            gap between academic knowledge and practical application.
            <br /> <br />
            Since its inception, SIH has garnered significant success in
            promoting out-of-the-box thinking among young minds, particularly
            engineering students from across India. Each edition has built on
            the previous one, refining its approach and expanding its impact.
            The hackathon not only offers students an opportunity to showcase
            their skills but also encourages collaboration with industry
            experts, government agencies, and other stakeholders.
          </p>
        </div>

        <div
          className="row"
          style={{
            backgroundImage: "url(./media/back.svg)",
            width: "100%",
            height: "500px",
          }}
        >
          <div className="col-5 mt-5">
            <iframe
              src="https://www.youtube.com/embed/v8zRjyCTgXQ"
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "15px",
                border: "0",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="SIH Hackathon 2025"
            ></iframe>
          </div>

          <div className="col-2 mt-5"></div>

          <div className="col-5 mt-5 mb-5">
            <img
              src="./media/sih.png"
              alt="SIH"
              style={{ width: "90%", height: "105%" }}
            />
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Same;
