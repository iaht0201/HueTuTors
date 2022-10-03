import React from "react";

export default function FeatureItem({ value }) {
  return (
    <>
      <li className="max-w-[258px] ">
        <div className="flex gap-3 text-xl font-semibold mb-2">
          <div
            className="flex items-center relative justify-center         
                before:content-[attr(before)] bg-white text-white
                before:w-7 before:h-7 before:bg-red-500
                before:absolute 
                before:mx-auto
                before:rounded-full
            "
            before=""
          >
            <span className="z-10"> {value.icon}</span>
          </div>
          <h2 className="uppercase">{value.name}</h2>
        </div>
        <div className="leading-6">{value.content}</div>
      </li>
    </>
  );
}
