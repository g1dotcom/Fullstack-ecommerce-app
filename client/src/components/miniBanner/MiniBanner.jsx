import React from "react";

//images
import img1 from "./images/55.png";
import img2 from "./images/11.png";
import img3 from "./images/44.jpg";
import img4 from "./images/15.jpg";
import img5 from "./images/21.png";
import img6 from "./images/35.jpg";
import img7 from "./images/32.png";

const MiniBanner = () => {
  return (
    <div className="my-10 relative flex flex-wrap justify-around">
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img1} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img5} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img2} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img6} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img3} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img7} alt="" />
      </div>
      <div className="my-10">
        <img className="w-[400px] rounded-lg " src={img4} alt="" />
      </div>
    </div>
  );
};

export default MiniBanner;
