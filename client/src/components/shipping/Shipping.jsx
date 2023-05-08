import React from "react";

//icons
import { MdLocalShipping } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const Shipping = () => {
  return (
    <div className=" my-10 w-full flex justify-around items-center bg-[#DCE9F2]">
      <div className="bg-white w-1/4 h-full rounded-full flex flex-col justify-center items-center">
        <span className="bg-purple-400 p-2 rounded-full">
          <MdLocalShipping className="text-purple-900" size={64} />
        </span>
        <h1 className="text-2xl text-purple-900 font-bold">Free Shipping</h1>
        <p className="text-center text-purple-300 w-2/3">
          Free shipping to all over the world with many specials only forour
          dear customers
        </p>
      </div>
      <div className="bg-white w-1/4 h-full flex rounded-full flex-col justify-center items-center">
        <span className="bg-pink-400 p-2 rounded-full ">
          <BsCurrencyDollar className="text-pink-900" size={64} />
        </span>
        <h1 className="text-2xl text-pink-900 font-bold">
          Super Affodable Price
        </h1>
        <p className="text-center text-pink-300 w-2/3">
          You can get various furnitures with the highest quality at an
          affoddable price
        </p>
      </div>
      <div className="bg-white w-1/4 h-full flex rounded-full flex-col justify-center items-center">
        <span className="bg-blue-400 p-2 rounded-full">
          <BsCurrencyDollar className="text-blue-900" size={64} />
        </span>
        <h1 className="text-2xl text-blue-900 font-bold">Best Quality</h1>
        <p className="text-center text-blue-300 w-2/3">
          Many customers entrust various furnitures needs to us,and customer
          satisfaction is our pride.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
