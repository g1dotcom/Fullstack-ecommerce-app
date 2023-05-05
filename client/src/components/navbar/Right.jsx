import React from "react";

//icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const Right = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3  rounded-full bg-gray-100">
        <input
          type="text"
          placeholder="..."
          className="bg-gray-100 outline-none "
        />
        <BsSearch size={25} />
      </div>
      <div className="bg-gray-100 rounded-md p-3 ">
        <AiOutlineHeart size={25} />
      </div>
      <div className="relative bg-gray-100 rounded-md p-3 ">
        <div className="absolute top-2 right-1 bg-white text-xs font-bold  text-black rounded-full w-3 h-3 flex items-center justify-center">
          3
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default Right;
