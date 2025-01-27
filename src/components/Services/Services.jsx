import React from "react";
import Title from "../Title/Title";
import HelpBtn from "../HelpBtn/HelpBtn";
import src1 from "../../assets/images/b51e46d3d5bb005d1e122864372c48f7.png";
import src2 from "../../assets/images/fba758a9dda73825ff383b42c06233e8.png";
import src3 from "../../assets/images/5c96be21672060676b836291c441e6b3.jpg";

export default function Services() {
  return (
    <div className="p-5 bg-gray-100">
      <Title title="Services"></Title>
      <div className="flex justify-center items-center p-6 flex-wrap  mx-auto text-[#324473]">
        <div className="cursor-pointer hover:scale-105 transition hover:opacity-85 w-80 sm:shrink grow min-w-70 max-w-96  m-6 rounded-4xl overflow-hidden bg-white shadow-xl">
          <div className=" overflow-hidden h-[299px]">
            <img src={src1} className="  h-full object-cover "></img>
          </div>
          <div className="p-6 ">

          <h2 className="mb-4 font-black text-xl">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            aspernatur? Quae fugit quas pariatur delectus magni doloremque,
            ratione quod nisi amet iusto est repellat aliquam. Sed fugit sunt
            corporis quia!
          </p>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transition hover:opacity-85 w-80 sm:shrink grow min-w-70 max-w-96 m-6 rounded-4xl overflow-hidden bg-white shadow-xl">
          <div className=" h-[299px]">
            <img src={src2} className=" h-full object-cover"></img>
          </div>
          <div className="p-6">

          <h2 className="mb-4 font-black text-xl">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            aspernatur? Quae fugit quas pariatur delectus magni doloremque,
            ratione quod nisi amet iusto est repellat aliquam. Sed fugit sunt
            corporis quia!
          </p>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transition hover:opacity-85 w-80 sm:shrink grow min-w-70 max-w-96  m-6 rounded-4xl overflow-hidden bg-white shadow-xl ">
          <div className=" overflow-hidden h-[299px] ">
            <img src={src3} className=" "></img>
          </div>
          <div className="p-6">

          <h2 className="mb-4 font-black text-xl">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            aspernatur? Quae fugit quas pariatur delectus magni doloremque,
            ratione quod nisi amet iusto est repellat aliquam. Sed fugit sunt
            corporis quia!
          </p>
          </div>
        </div>
      </div>
      <HelpBtn />
    </div>
  );
}
