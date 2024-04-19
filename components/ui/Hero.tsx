import React from "react";
function Hero() {
  return (
    <div className="hero">
      <div className="padding-x lg:px-10 px-5">
        <div className="lg:grid grid-row-2 gap-4">
          <div className="padding-x lg:px-20 lg:pt-10">
            <h1 className="hero__title mb-1">HOME</h1>
            <h1 className="hero__title mb-1">SERVICE</h1>
            <h1 className="hero__title mb-1">SOLUTIONS</h1>
            <h1 className="hero__title mb-1">ABOUT US</h1>
            <h1 className="hero__title mb-1">CONTCT US</h1>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Hero;
