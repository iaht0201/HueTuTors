import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title_Feature from "../Title_Feature";
import { Button } from "@material-tailwind/react";
import { TutorContext } from "../../context/tutorsContext";
import Top1 from "../../assets/images/vuongmien.png";
import Pagination from "../Pagination";
export default function TutorsHot() {
  const { tutors, getTutors, imageconvert, hotTutors, sorted } =
    useContext(TutorContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorsPerPage] = useState(3);
  useEffect(() => {
    getTutors();
    // HotTutors() ;
  }, []);

  const indexOfLastPost = currentPage * tutorsPerPage;
  const indexOfFirstPost = indexOfLastPost - tutorsPerPage;
  const currentTutors = hotTutors.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentTutors);
  const TutorItem = (props) => {
    const { image, name, address, subjects, price, description, path, rank } =
      props;

    return (
      <div
        className=" cursor-pointer px-1 py-3 sm:px-4 border border-[1px] 
      border-solid  my-4 rounded-[10px] hover:shadow-lg hover:shadow-gray-500/50 hover:delay-150 max-w-[850px] mx-auto"
      >
        <div className="flex flex-row justify-between">
          <div className=" flex flex-row  lg:gap-8 gap-4">
            <div className="w-[250px] ">
              <img
                src={image}
                alt=""
                className="w-full object-cover object-center h-[250px]"
              />
            </div>
            <div className="flex flex-col justify-between py-4 gap-4 ">
              <div className="flex flex-col gap-2 sm:max-w-[320px] lg:max-w-[600px]">
                <h2 className="font-bold text-lg text-[20px]">{name}</h2>
                <h3>
                  <span className="font-semibold"> Môn giảng dạy: </span>
                  {subjects.map((item, index) => (
                    <span key={index}> {item} , </span>
                  ))}
                </h3>
                <h3>
                  <span className="font-semibold"> Địa chỉ giảng dạy: </span>
                  <span>{address}</span>
                </h3>
                <h3>
                  <span className="font-semibold"> Giá : </span>{" "}
                  <span>{price} vnđ/tháng</span>
                </h3>
                <h3 className="italic text-gray-600">{description}</h3>
              </div>
              <div>
                {" "}
                <Button className="text-black p-3 cursor-pointer lg:text-[16px] text-[13px] ">
                  Xem chi tiết
                </Button>
                <Button className="text-black p-3 cursor-pointer lg:text-[16px] text-[13px]">
                  Mời dạy
                </Button>
                <Button className="text-black p-3 cursor-pointer lg:text-[16px] text-[13px]">
                  Liên hệ
                </Button>
              </div>
            </div>
          </div>
          <div className={`flex flex-col items-center relative `}>
            <img
              src={Top1}
              alt=""
              className={`w-[55px] ${rank == 1 ? "block" : "hidden"}`}
            />
            <div
              className={`rounded-[50px] bg-zinc-500 h-8 w-8 flex justify-center items-center ${
                rank == 1
                  ? "bg-[#fcd34d]"
                  : rank == 2
                  ? "bg-red-400"
                  : rank == 3
                  ? "bg-green-400"
                  : ""
              }`}
            >
              <span>{rank}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-[1140px] w-full mx-auto ">
        <Title_Feature title="Tìm gia sư theo chủ đề" />

        <div>
          {currentTutors.map((item, index) => {
            return (
              <TutorItem
                image={imageconvert(item.tutors[0].image)}
                name={`${item.firstName} ${item.lastname}`}
                address={item.address}
                subjects={item.tutors[0].subject}
                price={item.tutors[0].price}
                description={item.tutors[0].description}
                path={"a"}
                rank={index + 3 * (currentPage - 1) + 1}
              />
            );
          })}
          <Pagination
            postsPerPage={tutorsPerPage}
            totalPosts={hotTutors.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
