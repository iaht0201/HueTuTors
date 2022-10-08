import { Avatar, Image } from "antd";
import { Button } from "@material-tailwind/react";
import { AiOutlineLike } from "react-icons/ai";
import React from "react";
import "./tutorsDetails.scss";
import "antd/dist/antd.css";
export default function TutorDetail() {
  return (
    <div className="max-w-[1140px] mx-auto bg-white h-full ">
      <div className=" relative ">
        <div className="h-[200px] h-full">
          <Image
            // width={1140}
            // height={300}
            className="w-full top-[-16px] object-cover max-h-[200px] absolute rounded-b-2xl"
            src="https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
          ></Image>
          <div className="absolute left-[10%] bottom-[-45%] flex items-end w-[80%]">
            {/* <Avatar
              size={140}
              src="https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
              style={{
                backgroundColor: "#f56a00",
                // position: "absolute",
                // left: "10%",
                // bottom: "-50%",
                border: "4px solid white",
                margin: "0 10px 0 0 ",
              }}
            ></Avatar> */}
            <Image
              width={140}
              height={140}
              className="object-cover rounded-full border border-[4px] border-white border-solid mr-3 "
              src="https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
            ></Image>
            <div className="flex justify-between w-[80%]">
              <div>
                <h2 className="text-[25px] font-bold mb-0">Đoàn Quang Thái</h2>
                <div className="flex gap-4">
                  <div>Lượt thích : 10</div>
                  <div>Lượt đánh giá : 20</div>
                </div>
                <div> Môn dạy : Toán , Văn</div>
              </div>
              <div className="flex items-center">
                <Button className="bg-orange-400 px-5 rounded-[15px] text-[15px]">
                  Mời dạy
                </Button>
                <Button className="bg-blue-600 px-5 rounded-[15px] text-[15px] ml-4">
                  <AiOutlineLike className="text-[18px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">fdfdsfdsf</div>
    </div>
  );
}
