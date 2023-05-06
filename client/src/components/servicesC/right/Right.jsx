import React from "react";

//images
import img1 from "../images/13.png";
import img2 from "../images/k2.png";
import img3 from "../images/tv1.png";
//icons
import { SiHuawei } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { SiAcer } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { SiPhilipshue } from "react-icons/si";
import { SiJbl } from "react-icons/si";
import { SiLogitech } from "react-icons/si";
import Banner1 from "./rightComp/Banner1";
import Banner2 from "./rightComp/Banner2";
import Banner3 from "./rightComp/Banner3";

const Right = () => {
  return (
    <div className="flex flex-col">
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div>
  );
};

export default Right;
