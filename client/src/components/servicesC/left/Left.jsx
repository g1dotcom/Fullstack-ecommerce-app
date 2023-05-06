import React from "react";

import { SiHuawei } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { SiAcer } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { SiPhilipshue } from "react-icons/si";
import { SiJbl } from "react-icons/si";
import { SiLogitech } from "react-icons/si";

const Left = () => {
  return (
    <div className="relative">
      <img
        className="w-[500px]"
        src="https://i.pinimg.com/564x/8a/21/33/8a21334dd9968a18b7ad7a2ccc7e250a.jpg"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl w-full h-full bg-gray-500 opacity-30 "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   w-1/6 h-full bg-gray-200 opacity-50 "></div>
      <h1 className="absolute top-1/2 left-1/2 flex flex-col justify-evenly h-3/4 items-center  -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xl">
        <p>T</p>
        <p>Ü</p>
        <p>M</p>
        <p>Ü</p>
        <p>R</p>
        <p>Ü</p>
        <p>N</p>
        <p>L</p>
        <p>E</p>
        <p>R</p>
      </h1>
      <span className="text-white w-full h-full flex justify-between items-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <SiHuawei className="text-red-500" size={48} />
          <AiFillApple size={48} />
          <SiJbl className="text-yellow-600" size={48} />
          <SiSony className="text-red-600" size={54} />
        </div>
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <SiAcer className="text-green-500" size={48} />
          <SiXiaomi className="text-orange-500" size={48} />
          <SiPhilipshue className="text-red-500" size={48} />
          <SiSamsung size={48} />
          <SiLogitech className="text-blue-500" size={48} />
        </div>
      </span>
    </div>
  );
};

export default Left;
