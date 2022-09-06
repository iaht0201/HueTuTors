import React from "react";

export default function WhyHueTuTor() {
  const whyTutor = [{}];
  return (
    <>
      <h1 className="font-bold text-3xl text-center my-6">
        Tại sao lại lựa chọn HueTutors{" "}
      </h1>
      <div className="max-w-[1140px] w-full 5 mx-auto">
        <div className="flex flex-wrap px-3 lg:flex-nowrap gap-4 justify-center">
          <span className="block max-w-[530px] w-full leading-10 tracking-wider text-lg">
            {" "}
            Thông thường, học sinh phải vật lộn với công việc của họ và dựa vào
            gia sư, nhưng học phí các lớp học đã trở nên rất đắt đỏ. Đặc biệt
            trong thời gian diễn ra COVID, nhiều trường học đã trực tuyến và
            thậm chí hoàn toàn ảo để học sinh tự học nội dung. Chúng tôi đã tạo
            ra một chương trình kết nối học sinh từ 7-13 tuổi với các gia sư
            trung học và đại học trên khắp thế giới. Những người dạy kèm này dạy
            học sinh của họ các môn học như Khoa học, Toán và Tiếng Anh.
          </span>
          <img
            src="https://educationisttutoring.org/images/60ccc256a74ac33ebf500fac_j-kelly-brito-PeUJyoylfe4-unsplash-p-1080-p-800.jpeg"
            alt="anh"
            className="max-w-[530px] w-full rounded-md"
          />
        </div>
        <div className="flex flex-wrap px-3 lg:flex-nowrap gap-4 mt-3 justify-center">
          <span className="block max-w-[530px] w-full lg:order-2 leading-10 tracking-wider text-lg my-auto">
            {" "}
            Thông thường, học sinh phải vật lộn với công việc của họ và dựa vào
            gia sư, nhưng học phí các lớp học đã trở nên rất đắt đỏ. Đặc biệt
            trong thời gian diễn ra COVID, nhiều trường học đã trực tuyến và
            thậm chí hoàn toàn ảo để học sinh tự học nội dung. Chúng tôi đã tạo
            ra một chương trình kết nối học sinh từ 7-13 tuổi với các gia sư
            trung học và đại học trên khắp thế giới. Những người dạy kèm này dạy
            học sinh của họ các môn học như Khoa học, Toán và Tiếng Anh.
          </span>
          <img
            src="https://educationisttutoring.org/images/60ccc27c819b8b9803010270_priscilla-du-preez--mCXEsLd2sU-unsplash-p-1080-p-800.jpeg"
            alt="anh"
            className="max-w-[530px] w-full lg:order-1 rounded-md"
          />
        </div>
      </div>
    </>
  );
}
