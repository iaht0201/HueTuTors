import React from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import {BsArrowRightShort} from "react-icons/bs" ;
export default function IntroduceClass() {
  const [rowsToDisplay, setRowsToDisplay] = useState(4);

  const products = [
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },

    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
    {
      id: 1,
      name: "Môn toán",
      href: "#",
      imageSrc:
        "https://ielts-thanhloan.com/wp-content/uploads/2020/10/mathematics-png.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "150.000vnđ/tháng",
      address: "32/1 Kiệt 2, Lại Thế 2, Phú Thượng, Thừa Thiên Huế",
    },
  ];
  // useEffect(() => {
  //   console.log("rowsToDisplay", rowsToDisplay);
  // }, [rowsToDisplay]);

  const showMore = () => {
    rowsToDisplay < products.length
      ? setRowsToDisplay(rowsToDisplay * 2)
      : setRowsToDisplay(rowsToDisplay);
  };
  return (
    <>
      <div className=" w-full text-center flex items-center">
        {" "}
        <b className="block flex-1 h-[1px] bg-gray-100"></b>
        <h2 className="lg:text-[23px] font-bold text-black lg:mx-4 text-[15px] mx-3 ">
          Danh sách lớp học
        </h2>
        <b className="block flex-1 h-[1px] bg-gray-100"></b>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {products.slice(0, rowsToDisplay).map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to="/class" className="flex items-center gap-2">
                        <SiGoogleclassroom /> {product.name}
                      </Link>
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className=" text-gray-500 flex items-center gap-1 text-[11px]">
                  <AiTwotoneCalendar />
                  Lớp: 2
                </div>
                <div className=" text-gray-500 flex items-center gap-1 text-[11px]">
                  <AiTwotoneCalendar /> Lịch học: 2,4,6
                </div>
                <div className=" text-gray-500 flex items-center gap-1 text-[11px]">
                  <GoLocation /> {product.address}
                </div>
                <div className=" text-gray-500 flex items-center gap-1 text-[11px] justify-end">
                  Xem chi tiết <BsArrowRightShort />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <p>
          <div className="btn btn-primary" onClick={showMore()}>
            Show more
          </div>
        </p> */}
      </div>

      <div
        className={`animate-bounce mt-5 text-center cursor-pointe border py-2 ${
          rowsToDisplay >= products.length ? "hidden" : "block"
        }`}
        onClick={() => showMore()}
      >
        Xem thêm
      </div>
    </>
  );
}
