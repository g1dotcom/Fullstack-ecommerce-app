import React from "react";

//icons
import { SiPhilipshue, SiAcer, SiXiaomi } from "react-icons/si";

import { AiFillApple } from "react-icons/ai";

//images
import img1 from "../../images/13.png";

const Banner2 = () => {
  return (
    <div className="flex  justify-center items-center bg-gray-100  h-full w-full mx-10 my-10 ">
      <div className="flex  justify-evenly w-full items-center ">
        <h1 className="font-bold text-2xl text-gray-500 mx-8">
          Tüm Tv Çeşitleri
        </h1>
        <div className="flex justify-evenly w-1/2 items-center bg-white">
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
              <h1 className="font-bold">Apple</h1>
              <p>
                <AiFillApple size={48} />
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
