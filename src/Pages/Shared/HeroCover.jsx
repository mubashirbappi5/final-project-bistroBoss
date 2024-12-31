import React from 'react';
import { Parallax, Background } from 'react-parallax';
const HeroCover = ({img,title,subtitle}) => {
    console.log(img)
    return (
        <div>
          <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       
        <div
  className="hero min-h-screen"
 >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-[#151515] bg-opacity-30 w-10/12 mx-auto py-20">
    <div className="  ">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">
       {subtitle}
      </p>
      
     
    </div>
  </div>
</div>
    </Parallax>
            
            
        </div>
    );
};

export default HeroCover;