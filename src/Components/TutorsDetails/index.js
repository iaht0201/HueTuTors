import { Image } from "antd";
import React from "react";
import 'antd/dist/antd.css';
export default function TutorDetail() {
  return (
    <div className="w-[1140px] mx-auto relative">
      <Image
        width={1140}
        height={300}
        className="w-[1140px] top-0 object-cover"
        src="https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
      />
    </div>
  );
}
