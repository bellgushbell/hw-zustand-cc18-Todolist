import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex justify-between 
    items-center px-4 h-[60px] bg-green-500 "
    >
      <div className="text-2xl font-bold">Navbar</div>
      <div className="flex flex-row gap-6">
        
        <p
          className="bg-green-300 
        px-2 py-1 rounded-md
        hover:scale-105 shadow-lg hover:-translate-y-1
        hover:duration-200  hover:bg-red-400 
        "
        >
          Home
        </p>
        <p
          className="bg-green-300 
        px-2 py-1 rounded-md
        hover:scale-105 shadow-lg hover:-translate-y-1
        hover:duration-200 hover:bg-red-400 
        "
        >
          About
        </p>
        <p
          className="bg-green-300 
        px-2 py-1 rounded-md
        hover:scale-105 shadow-lg hover:-translate-y-1
        hover:duration-200  hover:bg-red-400
        "
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default Navbar;
