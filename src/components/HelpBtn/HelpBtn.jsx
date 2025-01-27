import React from "react";

export default function HelpBtn({ style }) {
  return (
    <>
      <button
        className={` cursor-pointer hover:opacity-80 rounded-3xl py-3 px-11  text-lg font-bold block my-3 sm:scale-110 mx-auto
        ${style == "2"? "bg-[#EEC04B] text-[#515151] ": "bg-[var(--main-color)] text-white  "}`}
      >
        Help Me
      </button>
    </>
  );
}
