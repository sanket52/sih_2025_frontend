
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
  
import FastMarquee from "react-fast-marquee";


const spanStyle = {
  padding: '10px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px'
}
const slideImages = [
   { url: "/media/slide1.png" },
  { url: "/media/slide2.png" },
  { url: "/media/slide3.png" },
  { url: "/media/slide4.png" },
  { url: "/media/slide5.png" },
  { url: "/media/slide6.png" },
  { url: "/media/slide7.png" },
  { url: "/media/slide8.png" },
 
];

const Theme = () => {
  return (
    <>  
    <div className="slide-container">
      <Slide
        autoplay={true}
        duration={1000}
        transitionDuration={300}
        infinite={true}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      
    </div>
  <FastMarquee className="fs-5 mb-5" style={{color:"white",backgroundColor:"black"}}>
    Request Letter to All Head of Institutes from Chairman, AICTE regarding scheduling of examination during Grand Finale of SIH 2025 |
  </FastMarquee>



   
   
     </>
  );
};

export default Theme;
