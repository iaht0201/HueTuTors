import React from "react";

export default function Title_Feature({ title }) {
//   const { title } = props;
  return (
    <>
      <div className=" w-full text-center flex items-center">
        {" "}
        <b className="block flex-1 h-[1px] bg-current"></b>
        <h2 className="text-4xl my-6 font-bold text-[#2c70b9] mx-12  ">
          {title}
        </h2>
        <b className="block flex-1 h-[1px] bg-current"></b>
      </div>
    </>
  );
}
