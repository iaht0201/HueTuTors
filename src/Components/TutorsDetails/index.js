import { Avatar, Image } from "antd";
import { Button } from "@material-tailwind/react";
import { AiOutlineLike } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import React, { useContext, useEffect } from "react";
import "./tutorsDetails.scss";
import "antd/dist/antd.css";
import { TutorsDetailContext } from "../../context/tutorDetailContext";
export default function TutorDetail(props) {
  const { getDetails, detail, loading, imageconvert } =
    useContext(TutorsDetailContext);
  useEffect(() => {
    getDetails(props.userId);
  }, []);
  console.log("detail", detail);
  const handleNameAvatar = (name) => {
    return name.slice(0, 1);
  };
  return (
    <>
      {!loading && detail[0] ? (
        <div className="max-w-[1140px] mx-auto bg-white h-[120%] ">
          {/* {detail?.map((item, index) => {
            return (
              <div key={index}> */}
          <div className=" relative ">
            <div className="h-[200px] h-full">
              {detail[0].cover_images !== "" ? (
                <Image
                  // width={1140}
                  // height={300}
                  className="w-full top-[-16px] object-cover max-h-[200px] absolute rounded-b-2xl"
                  src={imageconvert(detail[0]?.cover_images)}
                ></Image>
              ) : (
                <div className="w-full bg-slate-500 h-[200px]"></div>
              )}
              <div className="absolute md:left-[10%] md:bottom-[-45%] bottom-[-115%] flex md:items-end md:w-[80%] w-full flex-col items-center md:flex-row">
                {detail[0].cover_images !== "" ? (
                  <Image
                    width={140}
                    height={140}
                    className="object-cover rounded-full border border-[4px] border-white border-solid mr-3 "
                    src={imageconvert(detail[0]?.avatar)}
                  ></Image>
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

                <div className="flex md:w-[80%]  w-full px-[10px] md:justify-between md:flex-row flex-col gap-4 items-center">
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
          <div className="md:mt-[100px] mt-[247px]">fdfdsfdsf</div>
        </div>
      ) : (
        //     );
        //   })}
        // </div>
        "loading"
      )}
    </>
  );
}
// 147 83
