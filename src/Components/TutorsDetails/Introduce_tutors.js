import React from "react";

export default function IntroduceTutors() {
  return (
    <>
      <div className=" w-full text-center flex items-center">
        {" "}
        <b className="block flex-1 h-[1px] bg-gray-100"></b>
        <h2 className="lg:text-[23px] font-bold text-black lg:mx-4 text-[15px] mx-3 ">
          Thông tin gia sư
        </h2>
        <b className="block flex-1 h-[1px] bg-gray-100"></b>
      </div>

      {/* <div className="flex gap-4 text-[15px]">
        <div className="">Năm sinh: 1998</div>
        <div>Lượt đánh giá : 20</div>
      </div> */}
      <div className=" text-[15px]">
        <p> Năm sinh : 1998 </p>
        <p> Giới tính: Nữ</p>
        <p> Quê quán: Hà Nội</p>
        <p> Học vấn: Đại học</p>
        <p>
          Đại học năm 3 - Chuyên ngành Sư Phạm Tin - Trường ĐH Sư Phạm Hà Nội
        </p>
        <div>
          <h3>Kinh nghiệm gia sư, giảng dạy</h3>
          <p className="text-justify">
            {" "}
            Mình đã có kinh nghiệm dạy kèm các lớp cho mẹ từ năm lớp 10, khi lên
            Đại học mình cũng đã có hơn 2 năm kinh nghiệm đi gia sư các lớp
            Toán, Anh cấp 1,2,3 và ôn thi ĐH
          </p>
        </div>
        <div>
          <h3>Thành tích trong học tập và dạy học</h3>
          <p className="text-justify">
            {" "}
            12 năm học mình luôn là học sinh giỏi toàn diện, cấp 3 mình học lớp
            chuyên Toán của Trường THPT Chuyên Bắc Giang, Từng là HSG Cấp Tỉnh
            môn Toán và Anh năm lớp 11 và 12. Mình đã đạt được giải nhìn HSG cấp
            tỉnh môn Toán lớp 11 và giải ba HSG môn Anh cáp Tỉnh năm lớp 12 MÌnh
            đã giúp nhiều em học sinh từ hổng kiến thức lên khá, học sinh ôn thi
            vào trường chuyên và ôn thi ĐH điểm số cao.
          </p>
        </div>
      </div>
    </>
  );
}
