import React from "react";
import head from "../../assets/images/bcd4ea40fd6f4f4dff686cafacecaf9e.jpg";
import logo from "../../assets/images/Group 565.svg";
import HelpBtn from "../HelpBtn/HelpBtn";

export default function Head() {
  return (
    <div className="h-screen  bg-gray-100 relative  flex justify-center items-center">
      <div
        className="headimg  h-[90%] top-[5%] left-[3%] absolute  "
      
      >
        <img src={head} className="object-cover h-full "></img>
      </div>

      <div className="absolute z-10 flex flex-col gap-16 justify-center items-center">
          <div className="title m-3 ">
            <img src={logo} className="mx-auto w-2/3 xl:w-4/5 cursor-pointer "></img>
          </div>
        <div className=" text-center">

          <button className="bg-[#6D91EE] text-white rounded-2xl text-sm p-2 px-3 sm:text-lg sm:px-4 cursor-pointer hover:opacity-80 ">
            Experts
          </button>
          <h1 className=" text-4xl text-[#4F4F4F] my-2 md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="font-[100]">Lorem</span>
            <span className="block font-black"> Lorem lorem</span>
          </h1>
          <p className="w-1/2 min-w-50  md:w-4/9  mx-auto my-3  sm:my-4 sm:text-lg text-[#4F4F4F] font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>

          <HelpBtn />
        </div>
      </div>
    </div>
  );
}
