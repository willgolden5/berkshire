import React, { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-full items-center justify-center animate-fadeIn"
    >
      <div className="flex items-center align-middle md:w-[940px]">
        <div className="flex align-middle items-center p-6 w-full">
          <div className="w-1/2">
            <h3 className="text-5xl text-primary font-bold pb-[.3em] hover:text-secondary ">
              Welcome to the Berkshire Project.
            </h3>
            <h1 className="font-light text-black text-xl pb-[16px]">
              An inclusive arts and music based retreat that strives to develop
              connections that will last for years to come.
            </h1>
            <div className="flex w-full space-x-2">
              <button className="bg-primary hover:bg-secondary hover:animate-wiggle text-white px-4 w-1/3 py-2 rounded-lg">
                Donate
              </button>
              <button className="bg-secondary hover:bg-primary text-white w-1/3 px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="ml-auto w-[400px] animate-slideIn">
            <img src="./static/logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Hero;
