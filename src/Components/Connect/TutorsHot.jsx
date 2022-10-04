import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title_Feature from "../Title_Feature";
import { Button } from "@material-tailwind/react";
import { TutorContext } from "../../tutorsContext";
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
    const { image, title, address, subjects, price, description, path, rank } =
      props;

    return (
      <div
        className=" cursor-pointer px-1 py-3 sm:px-4 border border-[1px] 
      border-solid mx-1 my-4 rounded-[10px] hover:shadow-lg hover:shadow-gray-500/50 hover:delay-150"
      >
        <div className="flex flex-row justify-between">
          <div className=" flex flex-row  gap-8 ">
            <div className="w-[280px]  ">
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between py-4 ">
              <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <h3>
                  Môn giảng dạy:{" "}
                  {subjects.map((item, index) => (
                    <span key={index}> {item} , </span>
                  ))}
                </h3>
                <h3>
                  Địa chỉ giảng dạy: <span>{address}</span>
                </h3>
                <h3>
                  Giá : <span>{price} vnđ/tháng</span>
                </h3>
                <h3>{description}</h3>
              </div>
              <div>
                {" "}
                <Button className="text-black p-3 cursor-pointer">
                  Xem chi tiết
                </Button>
                <Button className="text-black p-3 cursor-pointer">
                  Mời dạy
                </Button>
                <Button className="text-black p-3 cursor-pointer">
                  Liên hệ
                </Button>
              </div>
            </div>
          </div>
          {rank == 1 ? (
            <div className="flex flex-col items-center relative">
              <img src={Top1} alt="" className="w-[60px]" />
              <div
                className={`rounded-[50px] bg-zinc-500 h-8 w-8 flex justify-center items-center bg-[#fcd34d] `}
              >
                <span>{rank}</span>
              </div>
            </div>
          ) : (
            <div
              className={`rounded-[50px] bg-zinc-500 h-8 w-8 flex justify-center items-center ${
                rank == 2 ? "bg-red-400" : rank == 3 ? "bg-green-400" : ""
              }`}
            >
              {rank}
            </div>
          )}
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
                title={`${item.firstName} ${item.lastname}`}
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
          />
        </div>
      </div>
    </>
  );
}
