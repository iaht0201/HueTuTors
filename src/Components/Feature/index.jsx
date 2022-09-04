import React from "react";
import FeatureItem from "./FeatureItem";
import { TiTickOutline } from "react-icons/ti";
import Iframe from "react-iframe";

export default function Feature() {
  const features = [
    {
      icon: <TiTickOutline />,
      name: " Chất lượng",
      content:
        " Gia sư giỏi, kinh nghiệm từ các trường TOP đầu. Thông tin hồ sơ rõ ràng",
    },
    {
      icon: <TiTickOutline />,
      name: "NHANH CHÓNG",
      content:
        "Chỉ 3 phút để tìm gia sư giỏi phù hợp với đúng yêu cầu của gia đình",
    },
    {
      icon: <TiTickOutline />,
      name: "TIỆN LỢI",
      content:
        "Công nghệ 4.0 giúp bạn tự kết nối với hàng ngàn gia sư ngay trên Smartphone",
    },
    {
      icon: <TiTickOutline />,
      name: "HỌC PHÍ",
      content:
        "Tự chọn gia sư và tự chủ động đưa ra mức học phí phù hợp với yêu cầu",
    },
    {
      icon: <TiTickOutline />,
      name: "ĐA DẠNG",
      content:
        "Người học có thể lựa chọn gia sư là: Giáo viên, Sinh viên, Nguời nước ngoài, …",
    },
    {
      icon: <TiTickOutline />,
      name: "MIỄN PHÍ",
      content:
        "Nguời học không phải trả bất kỳ khoản phí kết nối tìm gia sư cho chúng tôi",
    },
  ];
  return (
    <div className="max-w-[1140px] w-full mx-auto ">
      <div className=" w-full text-center flex items-center">
        {" "}
        <b className="block flex-1 h-[2px] bg-current"></b>
        <h2 className="text-4xl my-6 font-bold text-[#2c70b9] mx-12">
          Tính năng nổi bật
        </h2>
        <b className="block flex-1 h-[2px] bg-current"></b>
      </div>
      <div className="flex justify-between">
        <Iframe
          url="http://www.youtube.com/embed/Yw9Ra2UiVLw"
          width="530px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
        <ul className="max-w-[585px] w-full] grid grid-cols-258 gap-10">
          {features.map((item, index) => {
            return <FeatureItem key={index} value={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
