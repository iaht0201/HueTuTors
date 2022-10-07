import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { GoClock, GoSearch } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../assets/images/logo2.png";
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
export default function Header1() {
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
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="a"
        href="#"
        variant="small"
        className=" cursor-pointer font-normal text-black"
      >
        <GoSearch />
      </Typography>
      {navbar.map((item, index) => {
        return (
          <Typography
            as="li"
            key={index}
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black group relative"
          >
            {item.child.length != 0 ? (
              <div className="flex items-center gap-3 ">
                {item.name} <IoIosArrowDown />
                <NavbarItem data={item.child} />
              </div>
            ) : (
              <Link to={item.path}> {item.name}</Link>
            )}
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <>
      <div className="max-w-[1440px] h-[30px] bg-[#3b579d] text-white font-semibold md:pl-6 md:pr-3 flex items-center justify-between">
        <div className=" xs:px-2 lg:px-32  flex  w-full items-center justify-center sm:justify-between">
          <div className="flex items-center gap-8">
            <div className="hidden sm:block">
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
          <div className="hidden sm:block">
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
      <Navbar className="mx-auto max-w-screen-[1440px] py-0 px-4 lg:px-8 lg:py-1">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal text-black"
          >
            <img
              src={Logo}
              alt="logo"
              className="lg:w-[100px] object-cover px-[15px] w-[80px]"
            />
          </Typography>

          <div className="hidden lg:block">{navList}</div>
          <div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-black"
            >
              <span>Đăng nhập</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-black"
            >
              <span>Đăng ký</span>
            </Button>
          </div>

          <IconButton
            variant="text"
            className="flex items-center ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav} className={`${openNav ? "block" : "hidden"}`}>
          {navList}
          <Link to="/">
            <span className="text-black block mb-4"> Đăng Nhập</span>
          </Link>
          <Link to="/">
            <span className="text-black block"> Đăng ký</span>
          </Link>
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <Link to="/">
              <span> Đăng Nhập</span>
            </Link>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <Link to="/">
              <span> Đăng ký</span>
            </Link>
          </Button> */}
        </MobileNav>
      </Navbar>
    </>
  );
}
