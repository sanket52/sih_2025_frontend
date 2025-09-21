

import React from "react";

const Organisers = () => {
  const Organiser = [
    {
      src: "./media/aict.png",
      alt: "aict_image",
    },
    {
      src: "./media/foor.png",
      alt: "foor_image",
    },
    {
      src: "./media/sbi.png",
      alt: "sbi_image",
    },
    {
      src: "./media/moe.png",
      alt: "moe_image",
    },
  ];
  return (  <>     <hr style={{border:"2px solid black"}}/>
    <div className="mt-5 p-5" style={{backgroundColor:"#212529"}}>
        
      <div  className="mt-5">
     
        <div  className="mb-5" style={{backgroundColor:"#ffffff", borderBlock:"5px",borderRadius:"20px" , width:"80%",  margin:"-8%  8% 8% 8%"}}> 
         <h1 className="text-center text-2xl font-bold">ORGANISERS</h1>
        <div className="flex justify-center items-center gap-6 mt-4 " style={{marginLeft:"25%"}}>
           
          {Organiser.map((org, index) => {
           return <img key={index} src={org.src} alt={org.alt}  className="h-16"  style={{width:"15%"}}/>;
          })}
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Organisers;
