import React from "react";

//components
import Left from "./left/Left";
import Right from "./right/Right";
//components

const ServicesC = () => {
  return (
    <div className=" w-full my-14 flex justify-evenly items-center ">
      <div className="bg-gray-500">
        <Left />
      </div>
      <Right />
    </div>
  );
};

export default ServicesC;
