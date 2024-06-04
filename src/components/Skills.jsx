import React from "react";
import hero from "../assets/hero.jpg";
function Skills() {
  return (
    <div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px]  max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center lg:text-center">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br />
        Tech <br />
        Stack <br />{" "}
      </h2>
      <div className="flex flex-col items-center m-4 w-[80px] sm:my-0 md:w-[100ppx]">
        <img src={hero} className="w-[80px] h-[80px]" alt="image" />
        <p className="mt-2">tailwindcss</p>
      </div>
      <div className="flex flex-col items-center m-4 w-[80px] sm:my-0 md:w-[100ppx]">
        <img src={hero} className="w-[80px] h-[80px]" alt="image" />
        <p className="mt-2">react</p>
      </div>
      <div className="flex flex-col items-center m-4 w-[80px] sm:my-0 md:w-[100ppx]">
        <img src={hero}  width={100} height={100} alt="image" />
        <p className="mt-2">react</p>
      </div>
    </div>
  );
}

export default Skills;
