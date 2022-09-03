import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { GoClock, GoSearch } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../assets/images/logo.png";
import NavbarItem from "./Header/NavbarItem";

import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navbar = [
    {
      name: "Dịch vụ",
      child: [
        {
          title: "Gia Sư Toán ",
          path: "/dich-vu/gia-su-toan",
        },
        {
          title: "Gia Sư Văn ",
          path: "/dich-vu/gia-su-van",
        },
        {
          title: "Gia Sư Tiếng Anh ",
          path: "/dich-vu/gia-su-tieng-anh",
        },
        {
          title: "Gia Sư Lịch Sử ",
          path: "/dich-vu/gia-su-lich-su",
        },
        {
          title: "Gia Sư Địa Lý ",
          path: "/dich-vu/gia-su-dia-ly",
        },
        {
          title: "Gia Sư Hóa Học ",
          path: "/dich-vu/gia-su-hoa-học",
        },
        {
          title: "Gia Sư Vật Lý ",
          path: "/dich-vu/gia-su-vat-ly",
        },
      ],
    },
    {
      name: "Phụ Huynh",
      child: [
        {
          title: "Hướng dẫn tìm gia sư",
          path: "/phu-huynh/huong-dan-tim-gia-su",
        },
        {
          title: "Kinh nghiệm tìm gia sư ",
          path: "/phu-huynh/kinh-nghiem-tim-gia-su",
        },
        {
          title: "Học phí gia sư tham khảo ",
          path: "/phu-huynh/hoc-phi-gia-su-tham-khao",
        },
      ],
    },
    {
      name: "Gia sư",
      child: [
        {
          title: "Hướng dẫn đăng ký ",
          path: "/phu-huynh/huong-dan-tim-gia-su",
        },
        {
          title: "Hướng dẫn khiếu nại",
          path: "/phu-huynh/kinh-nghiem-tim-gia-su",
        },
        {
          title: "Hướng dẫn thanh toán ",
          path: "/phu-huynh/hoc-phi-gia-su-tham-khao",
        },
        {
          title: "Hướng dẫn phát sinh ",
          path: "/phu-huynh/hoc-phi-gia-su-tham-khao",
        },
        {
          title: "Nội dung nhận lớp ",
          path: "/phu-huynh/hoc-phi-gia-su-tham-khao",
        },
        {
          title: "Những lưu ý quan trọng ",
          path: "/phu-huynh/hoc-phi-gia-su-tham-khao",
        },
      ],
    },
    {
      name: "Đối tác",
      child: [
        {
          title: "Đăng ký làm trung tâm",
          path: "/phu-huynh/huong-dan-tim-gia-su",
        },
        {
          title: "Trở thành đối tác",
          path: "/phu-huynh/kinh-nghiem-tim-gia-su",
        },
      ],
    },
    {
      name: "Tin tức",
      child: [],
      path: "/tin-tuc",
    },
    {
      name: "Lớp mới",
      path: "/lop-moi",
      child: [],
    },
  ];
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navItem = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      <div className="max-w-[1440px] h-[30px] bg-[#3b579d] text-white font-semibold md:pl-6 md:pr-3 flex items-center justify-between">
        <div className="lg:px-32 flex justify-between w-full items-center">
          <div className="flex items-center gap-8">
            <div>
              <CgFacebook className="text-[28px] border p-[2px] rounded-md bg-[#3b579d] hover:border-none cursor-pointer" />
            </div>
            <div
              after=""
              className="flex items-center gap-2 opacity-70 hover:opacity-100 
              cursor-pointer transition-colors after::content-[attr(after)]
              after:border-r-[1px] after:h-[12px] after:ml-3"
            >
              <GoClock />
              <h3 className="text-[12.8px] ">08:00 -22:00</h3>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 cursor-pointer transition-colors">
              <BsFillTelephoneFill />
              <h3 className="text-[12.8px] text-yellow-50">0888575541</h3>
            </div>
          </div>
          <div>
            <ul className="flex gap-5">
              <li
                after=""
                className="flex justify-center items-center after::content-[attr(after)]
              after:border-r-[1px] after:h-[12px] after:ml-3  "
              >
                <Link to="/" className="text-[12.8px]">
                  Trang chủ
                </Link>
              </li>
              <li
                after=""
                className="flex justify-center items-center after::content-[attr(after)]
              after:border-r-[1px] after:h-[10px] after:ml-3  "
              >
                <Link
                  className="text-[12.8px]  opacity-70 hover:opacity-100 "
                  to="/"
                >
                  Liên hệ
                </Link>
              </li>
              <li className="flex justify-center items-center ">
                <Link
                  to="/"
                  className="text-[12.8px]  opacity-70 hover:opacity-100 "
                >
                  Fanpage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-white sticky top-0 shadow shadow-2xl z-50">
        <div className="max-w-[1440px] mx-auto  grid grid-cols-12 absolute bg-white w-full ">
          <div className="h-full flex lg:items-center col-span-2">
            <img
              src={Logo}
              alt="logo"
              className="h-[40px] w-[80px] object-cover px-[15px]"
            />
          </div>

          <div className="h-full flex lg:items-center col-span-8 ">
            <div className="mr-5 lg:my-auto mt-3  ">
              <GoSearch />
            </div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1
               border border-solid border-transparent 
               rounded bg-transparent block lg:hidden 
               outline-none focus:outline-none
               flex items-start mt-1
              
               "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>

            <div
              className={
                "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul
                className="flex gap-5 flex-col lg:flex-row list-none lg:ml-auto"
                before=""
              >
                {navbar.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="relative group cursor-pointer uppercase font-semibold hover:text-[#3b579d]"
                    >
                      {item.child.length != 0 ? (
                        <div className="flex items-center gap-3 ">
                          {item.name} <IoIosArrowDown />
                          <NavbarItem data={item.child} />
                        </div>
                      ) : (
                        <Link to={item.path}> {item.name}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="h-full flex items-center col-span-2">
            <img
              src={Logo}
              alt="logo"
              className="h-[40px] w-[80px] object-cover px-[15px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
