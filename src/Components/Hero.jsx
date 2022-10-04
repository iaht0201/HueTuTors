import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Hero1 from "../assets/images/img1.jpg";
import Hero2 from "../assets/images/img2.jpg";
import Hero3 from "../assets/images/img3.jpg";
import Hero4 from "../assets/images/img4.jpg";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Hero() {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow className="absolute text-[30px]" />,
    nextArrow: <NextArrow style="text-black text-lg " />,
  };
  const heros = [
    {
      image: Hero2,
    },
    {
      image: Hero1,
    },
    {
      image: Hero3,
    },
    {
      image: Hero4,
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {heros.map((item, index) => {
          return (
            <img
              src={item.image}
              alt=""
              key={index}
              className="h-[90vh] w-full object-cover object-right-top z-0 "
            />
          );
        })}
      </Slider>
      {/* <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {heros.map((item, index) => {
          return (
            <SwiperSlide>
              <img
                src={item.image}
                alt=""
                key={index}
                className="h-[90vh] w-full object-cover object-right-top z-0 "
              />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </>
  );
}
