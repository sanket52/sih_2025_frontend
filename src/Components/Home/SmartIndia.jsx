import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Smart.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SmartIndia = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/media/stock.png')", // ✅ fixed path
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="mt-5 mx-5 p-5">
        <h2 style={{ textAlign: "center", color: "orange" }}>THEMES</h2>
        <p className="text-center fs-5" style={{ color: "white" }}>
          No problem is too big... No idea is too small
        </p>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay={true}
          autoPlaySpeed={3000} // ✅ required
          keyBoardControl={true}
          showDots={true} // optional
        >
          {/* Card 1 */}
          <div className="p-3">
            <div
              className="card p-3"
              style={{
                backgroundImage: "url('/media/stock.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "270px",
              }}
            >
              <img src="/media/map.png" alt="Disaster" />
              <h4>DISASTER MANAGEMENT</h4>
              <p>
                Risk mitigation, planning & management before, during or after a
                disaster.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-3">
            <div className="card p-3">
              <img src="/media/smart.png" alt="Games" />
              <h4>GAMES & TOYS</h4>
              <p>
                Ideas focused on intelligent use of resources with AI to explore
                more opportunities.
              </p>
            </div>
          </div>

           <div className="card">
            <img src="./media/smart.png" alt="Games" />
            <h4>GAMES & TOYS</h4>
            <p>
              Ideas focused on the intelligent use of resources for transforming
              and advancements of technology with combining the artificial
              intelligence to explore more various sources .
            </p>
          </div>
          <div className="card">
            <img src="./media/clean.png" alt="Misc" />
            <h4>MISCELLANEOUS</h4>
            <p>
              digital information that powers cryptocurrencies and NFTs and can
              radically change multiple sectors. in these sectors continues to
              be in demand. Recent shifts in healthcare trends,
            </p>
          </div>

          <div className="card">
            <img src="./media/health.png" alt="Misc" />
            <h4>HEALTH</h4>
            <p>
              Cutting-edge technology in these sectors continues to be in
              demand. Recent shifts in healthcare trends, growing populations
              also present an array of opportunities for .
            </p>
          </div>

          <div className="card">
            <img src="./media/transport.png" alt="Misc" />
            <h4>TRANSPORT</h4>
            <p>
              Submit your ideas to address the growing pressures on the city’s
              resources, transport networks, and logistic infrastructure.in
              these sectors continues to be in demand.
            </p>
          </div>
          <div className="card">
            <img src="./media/education.png" alt="Misc" />
            <h4>EDUCATION</h4>
            <p>
              Smart education,a concept that describes learning in digital age.
              It enables learners to learn more effectively, efficiently,
              flexibly and comfortably.
            </p>
          </div>

          <div className="card">
            <img src="./media/agri.png" alt="Misc" />
            <h4>AGRICULTURE</h4>
            <p>
              Developing solutions, keeping in mind the need to enhance the
              primary sector of India - Agriculture and to manage and process
              our agriculture produce.
            </p>
          </div>

      
        </Carousel>
      </div>
    </div>
  );
};

export default SmartIndia;
