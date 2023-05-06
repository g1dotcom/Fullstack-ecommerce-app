import React from "react";

//icons

import { AiFillApple } from "react-icons/ai";

import { SiLogitech } from "react-icons/si";

import { SiJbl } from "react-icons/si";

import { SiSamsung } from "react-icons/si";

//images

import img2 from "../../images/k2.png";

const Banner3 = () => {
  return (
    <div
      className="flex cursor-pointer justify-center items-center bg-white  h-full w-full mx-10 
    hover:shadow-2xl hover:shadow-blue-400 hover:scale-90 hover:text-white hover:bg-gray-800 transition-all duration-300"
    >
      <div className="flex  justify-evenly w-full items-center ">
        <h1 className="font-bold text-2xl ">Tüm Kulaklık Çeşitleri</h1>
        <div className="flex justify-evenly w-1/2 items-center bg-gray-100">
          <div className="flex flex-col  ">
            {" "}
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-400">
              <h1 className="font-bold text-black">Apple</h1>
              <p>
                <AiFillApple className="text-black" size={48} />
              </p>
            </span>
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 text-blue-500 transition-all duration-300 ">
                <SiLogitech className="" size={64} />
              </p>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 transition-all duration-300 text-red-500">
                <SiJbl size={64} />
              </p>
            </span>
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-300">
              <p>
                <SiSamsung className="text-black" size={64} />
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-1/3 justify-center items-center">
        <img className="w-68  " src={img2} alt="" />
      </div>
    </div>
  );
};

export default Banner3;
