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

export default function Hero() {
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
      <Swiper
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
      </Swiper>
    </>
  );
}
