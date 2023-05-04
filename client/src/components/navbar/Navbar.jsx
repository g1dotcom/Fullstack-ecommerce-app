import React from "react";

//components
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <Left />
      <Right />
    </div>
  );
};

export default Navbar;
