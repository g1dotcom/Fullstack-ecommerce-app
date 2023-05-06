import React from "react";

//components
import Left from "./left/Left";
import Right from "./right/Right";
//components

const ServicesC = () => {
  return (
    <div className=" w-full my-14 flex justify-evenly items-center ">
      <Left />
      <Right />
    </div>
  );
};

export default ServicesC;
