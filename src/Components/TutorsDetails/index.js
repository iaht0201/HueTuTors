import { Avatar, Image } from "antd";
import { Button } from "@material-tailwind/react";
import { AiOutlineLike } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { IoIosAdd, IoIosAddCircleOutline } from "react-icons/io";
import React, { useContext, useEffect } from "react";
import "./tutorsDetails.scss";
import "antd/dist/antd.css";
import { TutorsDetailContext } from "../../context/tutorDetailContext";
import LoadingPage from "../Loading/loading";
import { useState } from "react";
import Title_Feature from "../Title_Feature";
import IntroduceTutors from "./Introduce_tutors";
import IntroduceClass from "./introduce_class";
export default function TutorDetail(props) {
  const { getDetails, detail, loading, imageconvert } =
    useContext(TutorsDetailContext);
  useEffect(() => {
    getDetails(props.userId);
  }, []);
  const [follow, setFollow] = useState(false);
  console.log("detail", detail);
  const handleNameAvatar = (name) => {
    return name.slice(0, 1);
  };
  return (
    <>
      {!loading && detail[0] ? (
        <div className="max-w-[1140px] mx-auto bg-white ">
          <div className=" relative ">
            <div className="md:h-[300px] h-[200px] h-full">
              {detail[0].cover_images !== "" ? (
                <Image
                  // width={1140}
                  // height={300}
                  className="w-full top-[-16px] object-cover md:max-h-[300px] max-h-[200px] absolute rounded-b-2xl"
                  src={imageconvert(detail[0]?.cover_images)}
                ></Image>
              ) : (
                <div className="w-full bg-slate-500  md:h-[300px] h-[200px] "></div>
              )}
              <div className="absolute md:left-[5%] lg:left-[10%] md:bottom-[-35%] bottom-[-115%] flex md:items-end md:w-[95%] lg:w-[80%] w-full flex-col items-center md:flex-row">
                {detail[0].cover_images !== "" ? (
                  <div className="relative">
                    <Image
                      width={140}
                      height={140}
                      className="object-cover rounded-full border border-[4px] border-white border-solid mr-3 shadow-lg "
                      src={imageconvert(detail[0]?.avatar)}
                    ></Image>
                    <div className="absolute bottom-2 right-[20px] text-[30px]  text-slate-900 w-[30px]  bg-white block rounded-full shadow-lg cursor-pointer">
                      {follow ? (
                        <TiTick
                          className="text-pink-500"
                          onClick={() => {
                            setFollow(false);
                          }}
                        />
                      ) : (
                        <IoIosAdd
                          onClick={() => {
                            setFollow(true);
                          }}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <Avatar
                    size={140}
                    style={{
                      backgroundColor: "#f56a00",
                      // position: "absolute",
                      // left: "10%",
                      // bottom: "-50%",
                      border: "4px solid white",
                      margin: "0 10px 0 0 ",
                    }}
                  >
                    {handleNameAvatar(detail[0].lastname)}
                  </Avatar>
                )}

                <div
                  className="flex md:w-[80%] w-full px-[10px] md:justify-between md:flex-row flex-col gap-4 items-center
                   "
                >
                  <div>
                    <h2 className="text-[28px] font-bold mb-0 text-center md:text-start">
                      {detail[0].firstName} {detail[0].lastname}
                    </h2>
                    <div className="flex gap-4 text-[15px]">
                      <div className="">Lượt thích : 10</div>
                      <div>Lượt đánh giá : 20</div>
                    </div>
                    <div className="md:text-start text-center  text-[15px]">
                      {" "}
                      Môn dạy : Toán , Văn
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button className="bg-orange-400 px-5 rounded-[8px] text-[15px] flex gap-2 items-center">
                      <RiMailSendLine className="text-[20px]  " /> Mời dạy
                    </Button>
                    <Button className="bg-blue-600 px-5 rounded-[8px] text-[15px] ml-4 flex gap-2 items-center">
                      <AiOutlineLike className="text-[20px]  " />
                      Yêu thích
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Detail */}
          <div className="md:mt-[130px] mt-[247px] grid grid-cols-5 gap-1 pb-3 ">
            <div className=" md:col-start-1 md:col-end-3 p-4 col-span-full  bg-white border-r">
              {/* title */}
              <IntroduceTutors />
            </div>
            <div className=" md:col-start-3 md:col-end-6  bg-white px-3 col-span-full p-4">
              <IntroduceClass />
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
// 147 83
