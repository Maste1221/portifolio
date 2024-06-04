import React from "react";
import hero from "../assets/hero.jpg";
function About() {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 " id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primayr-color ">About me</h2>
            <p className="text-base lg:text-lg">am mastewal tesfaye form aastu for sofwater enginnering for theam mastewal tsfaye form aastu for sofwater enginnering for the  purpse of doing web develoent  for any development site .</p>

          </div>
        </div>
        <img className="mx-auto rounded-3xl py-8 md:py-0" src={hero} width={300} height={300}/>
      </div>

    </div>
  );
}

export default About;
