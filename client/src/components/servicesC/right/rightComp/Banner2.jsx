import React from "react";

//icons
import { SiPhilipshue, SiAcer, SiXiaomi } from "react-icons/si";

import { AiFillApple } from "react-icons/ai";

//images
import img1 from "../../images/13.png";

const Banner2 = () => {
  return (
    <div
      className="flex scale-95 cursor-pointer justify-center items-center my-10 bg-white  h-full w-10/12 mx-10 shadow-lg shadow-gray-400
    hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 hover:text-white hover:bg-gray-800 transition-all duration-500"
    >
      <div className="flex  justify-evenly w-full items-center ">
        <h1 className="font-bold text-2xl  mx-8">Tüm Tv Çeşitleri</h1>
        <div className="flex justify-evenly w-1/2 items-center rounded-full bg-gray-100">
          <div className="flex flex-col  ">
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-300">
              <p className="text-red-500">
                <SiPhilipshue size={48} />
              </p>
            </span>
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 transition-all duration-300 ">
                <SiAcer className="text-green-500" size={64} />
              </p>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex  justify-center items-center my-8">
              <p className="hover:scale-125 text-orange-500 transition-all duration-300">
                <SiXiaomi size={64} />
              </p>
            </span>
            <span className="flex flex-col justify-center items-center my-8 hover:scale-125 transition-all duration-300">
              <h1 className="font-bold text-black">Apple</h1>
              <p>
                <AiFillApple className="text-black" size={48} />
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-1/3 justify-center items-center">
        <img className="w-68 " src={img1} alt="" />
      </div>
    </div>
  );
};

export default Banner2;
