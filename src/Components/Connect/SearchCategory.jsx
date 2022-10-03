import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Title_Feature from "../Title_Feature";
import { useContext } from "react";
import { TutorContext } from "../../tutorsContext";
export default function SearchCategory() {
  const { loading, searchCategory, getSearchCategory } =
    useContext(TutorContext);

  useEffect(() => {
    getSearchCategory();
  }, []);
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-0 left-[20px] z-10 text-[30px] font-bold h-[170px] sm:h-full cursor-pointer "
      >
        <MdOutlineArrowBackIosNew className="h-full" />
      </div>
    );
  };
  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-0 right-[20px] z-10 text-[30px] font-bold h-full  h-[170px] sm:h-full cursor-pointer"
      >
        <MdOutlineArrowForwardIos className="h-full" />
      </div>
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: true,
    infinite: true,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <PrevArrow className="absolute text-[30px]" />,
    nextArrow: <NextArrow style="text-black text-lg " />,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const SliderItem = (props) => {
    return (
      <div
        className="px-1 pb-3 sm:px-4 text-center border border-[1px] border-solid mx-1 my-4 rounded-[10px] shadow-lg shadow-gray-500/50"
      >
        <Link to={props.path}>
          <img
            src={props.image}
            alt=""
            className="w-[350px] py-2 rounded-[10px] "
          />
        </Link>
        <h3 className="font-semibold md:text-[16px] text-[10px]">
          {props.title}
        </h3>
      </div>
    );
  };
  return (
    <>
      <div className="max-w-[1140px] w-full mx-auto ">
        <Title_Feature title="Tìm gia sư theo chủ đề" />
        <Slider {...settings} className="container mx-auto">
          {!loading &&
            searchCategory?.map((item, index) => {
              return (
                <SliderItem
                  path={item.short_name}
                  title={item.name}
                  image={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/searchcategory/${item.image}`}
                />
              );
            })}
        </Slider>
      </div>
    </>
  );
}
