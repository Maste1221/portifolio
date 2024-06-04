import React from "react";
import hero from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <div className="gird grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md: h-[70vh] lg:h-[100vh]  mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={hero} alt="image" />
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I am, </span>
          <br />
          <TypeAnimation 
           sequence=
           {["frontend developer", 1000, "web designer", 300]}
           wrapper='span' speed={50}
           repeat={Infinity}>
           
          </TypeAnimation>
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
            My Name is mastewal tesfaye i am web developer .
        </p>
        <div className="my-8">
            <a href="/" className="px-6 py-3 w-full rounded-xl mr-4    bg-gradient-to-br from-orange-500 to-pink-600 text-white"
         >Downoad cv</a>
         <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-pink-600 text-white hover:border-none">
            Conatct
         </a>

        </div>
      </div>
    </div>
  );
}

export default Hero;
