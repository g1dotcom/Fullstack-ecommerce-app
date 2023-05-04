import React from "react";

//icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const Right = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 text-white rounded-full bg-[#ff735c]">
        <input
          type="text"
          placeholder="..."
          className="bg-[#ff735c] outline-none text-white"
        />
        <BsSearch size={25} />
      </div>
      <div className="bg-[#ff735c] rounded-md p-3 text-white">
        <AiOutlineHeart size={25} />
      </div>
      <div className="relative bg-[#ff735c] rounded-md p-3 text-white">
        <div className="absolute top-2 right-1 bg-white text-xs font-bold  text-[#ff735c] rounded-full w-3 h-3 flex items-center justify-center">
          3
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default Right;
