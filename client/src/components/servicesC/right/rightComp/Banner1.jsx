import React from "react";

//icons

import { AiFillApple } from "react-icons/ai";

import { SiHuawei } from "react-icons/si";

import { SiSamsung } from "react-icons/si";

import { SiSony } from "react-icons/si";

//images
import img3 from "../../images/tv1.png";

const Banner1 = () => {
  return (
    <div className="flex justify-center items-center bg-white  h-full w-full mx-10 ">
      <div className="flex  justify-evenly w-full items-center ">
        <h1 className="font-bold text-2xl text-gray-500">
          Tüm Telefon Çeşitleri
        </h1>
        <div className="flex justify-evenly w-1/2 items-center bg-gray-100">
          <div className="flex flex-col  ">
            {" "}
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-300">
              <p className="text-red-500">
                <SiHuawei size={48} />
              </p>
              <h1 className="font-bold">Huawei</h1>
            </span>
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 transition-all duration-300 ">
                <SiSony className="" size={64} />
              </p>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 transition-all duration-300">
                <SiSamsung size={64} />
              </p>
            </span>
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-300">
              <h1 className="font-bold">Apple</h1>
              <p>
                <AiFillApple size={48} />
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex  w-1/3 justify-center items-center">
        <img className="w-68 p-2  " src={img3} alt="" />
      </div>
    </div>
  );
};

export default Banner1;
