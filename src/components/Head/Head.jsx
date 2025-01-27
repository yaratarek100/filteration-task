import React from "react";
import head from "../../assets/images/bcd4ea40fd6f4f4dff686cafacecaf9e.jpg";
import logo from "../../assets/images/Group 565.svg";
import HelpBtn from "../HelpBtn/HelpBtn";

export default function Head() {
  return (
    <div className="h-screen  bg-gray-100 relative  flex justify-center items-center">
      <div
        className="h-[90%] top-[5%] left-[3%] absolute  "
        style={ { clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
      >
        <img src={head} className="object-cover h-full "></img>
      </div>

      <div className="absolute z-10 flex justify-center items-center">
        <div className=" text-center">
          <div className="title m-3 mb-9">
            <img src={logo} className="mx-auto w-2/3 sm:w-3/6 md:w-1/3 cursor-pointer "></img>
            {/* <h1>Round Rock <span>Trush Hauling</span> </h1> */}
          </div>

          <button className="bg-[#6D91EE] text-white rounded-2xl text-sm p-2 px-3 sm:text-lg sm:px-4 cursor-pointer hover:opacity-80 ">
            Experts
          </button>
          <h1 className=" text-4xl text-[#4F4F4F] my-2 md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="font-extralight">Lorem</span>
            <span className="block font-extrabold"> Lorem lorem</span>
          </h1>
          <p className="w-4/5 mx-auto my-3 sm:w-1/2 sm:my-4 sm:text-lg">
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
