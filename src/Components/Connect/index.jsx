import React from "react";
import SearchCategory from "./SearchCategory";
import TutorsHot from "./TutorsHot";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default function Connect() {
  return (
    <>
      <div className="bg-slate-600">
        <div className="container mx-auto ">
          <div className="py-5 my-2 text-center px-2">
            <h2 className="font-bold text-white">
              {" "}
              DỄ DÀNG KẾT NỐI HƠN 6000 + GIA SƯ GIỎI CẦN BẠN{" "}
            </h2>
          </div>
        </div>
      </div>
      <SearchCategory />
      <TutorsHot />
    </>
  );
}
