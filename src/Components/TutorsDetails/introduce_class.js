import React from "react";

export default function IntroduceClass() {
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
  ];
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
            {products.map((product) => (
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
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.address}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
