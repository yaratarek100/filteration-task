import React from "react";
import mainImg from "../../assets/images/fd6f05b7e4f0277ac5571d9a15a12ddb.png";
import HelpBtn from "../HelpBtn/HelpBtn";

export default function About() {
  return (
    <div className="mainBox relative md:h-screen bg-[#6D91EE] pb-3 md:p-0
     ">
      <div        className="leftDiv w-full md:h-full bg-cover bg-center "
        style={{
          backgroundImage: `
    linear-gradient(rgba(109, 145, 238, 0.7), rgba(109, 145, 238, 0.7)), 
    url("src/assets/images/5ab4770fb0ff3123d0ae01db31c409a7.jpg")
  `,
        }}
      >
        <div className="content text-left text-white md:w-[45%] xl:w-4/10 p-[7%]">
          <h1 className="font-bold text-4xl md:text-5xl my-7 
         ">About Us</h1>
          <p className="my-5  xl:text-xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
          <div className="w-4/5 rounded-3xl overflow-hidden">
            <img src={mainImg}></img>
          </div>
        </div>
      </div>
      <div  className="rightDiv bg-[#6D91EE] md:absolute md:w-3/4 
      right-0 top-0 md:h-full md:z-10 flex justify-end items-center "
  style={{  clipPath: window.innerWidth >= 768 ? "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" : "none",}}
>
  <div className="content text-right text-white  p-[7%] md:w-3/4">
    <h1 className="font-bold  text-4xl my-8  md:text-5xl ">Where</h1>
    <p className=" xl:text-xl   ">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
</div>
<div className=" md:absolute md:bottom-2 left-[50%] md:transform-[translateX(-50%)] md:z-20 ">
<HelpBtn style="2"/>
</div>

    
    </div>
  );
}
;