import React from "react";
import "./guide.scss";
import Anh1 from "../../assets/images/infor-logo.png";
import Anh2 from "../../assets/images/Dollar.png";
import Anh3 from "../../assets/images/Network.png";
import Title_Feature from "../Title_Feature";
export default function Guide() {
  const guideContext = [
    {
      image: Anh1,
      title: "Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn",
      content:
        "Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.",
    },
    {
      image: Anh2,
      title: "Cơ chế hoa hồng hấp dẫn, rõ ràng và minh bạch",
      content:
        "RecLand đem đến cho các bạn REC mức hoa hồng hấp dẫn, giúp cho các bạn REC có được mức thu nhập tương xứng mà không cần đến công ty làm việc",
    },
    {
      image: Anh3,
      title: "Mở rộng network và học hỏi từ cộng đồng",
      content:
        "   RecLand cũng thường xuyên tổ chức những buổi chia sẻ, buổi offline nhằm giúp các bạn REC trau dồi, học hỏi và mở rộng được network trong lĩnh vực tuyển dụng.",
    },
  ];
  return (
    <div className="max-w-[1140px] w-full mx-auto ">
      <Title_Feature title={"Tại sao lại chọn HueTutors"} />
      <ul className="infor-lists">
        {guideContext.map((item, index) => {
          return (
            <li className="infor-item">
              <img src={item.image} alt="logo" className="w-[50px] mx-auto" />
              <h4 className="infor-item-title">{item.title}</h4>
              <p className="infor-item-text">{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
