import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem({ data }) {
  // console.log(data);
  return (
    <>
      <ul
        className="absolute  bg-white border  transition-all top-8 shadow shadow-md  z-50
        before:content-[attr(before)]
        before:border-solid
        before:border-b-[#3b579d] 
        before:border-b-8 
        before:border-x-transparent 
        before:border-x-8
        before:border-t-0 
        before:absolute before:hidden  
        before:group-hover:block 
        before:top-[-16px] before:mx-6 before:mt-2
        cursor-pointer transition-all z-50 
        after:content-[attr(after)] after:bg-red after:w-[120px] after:h-[40px] after:inset-0 
        after:absolute after:top-[-32px]  after:hidden after:group-hover:block"
        before=""
        after=""
      >
        {data.map((item, index) => {
          return (
            <li
              className=" border  w-[300px] p-4 cursor-pointer hover:bg-[#3b579d] transition-colors
               hover:text-white hidden group-hover:block transition-all  "
              key={index}
            >
              <Link to={item.path}> {item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
