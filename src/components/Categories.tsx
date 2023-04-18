import React from "react";

const Categories = ({
  飯店,
  Villa,
  小木屋,
  青年旅館,
}: hotelCategoriesNumber) => {
  return (
    <div className="w-full max-w-[1024px] flex gap-4 overflow-x-scroll lg:overflow-x-hidden">
      <div className="min-w-[150px] h-[200px]  md:w-1/4 md:h-[250px] ">
        <img
          className="w-full h-[150px] md:h-[200px] object-cover"
          alt="類型"
          src="https://media.vogue.com.tw/photos/63ed9e84bf777a51ab33dbe3/2:3/w_1920,c_limit/63ECD6A5AC4741676465829.jpeg"
        />
        <h1 className="font-bold">飯店</h1>
        <p className="text-sm text-gray-500">{飯店}間</p>
      </div>

      <div className="min-w-[150px] h-[200px]  md:w-1/4 md:h-[250px] ">
        <img
          className="w-full h-[150px] md:h-[200px] object-cover"
          alt="類型"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/211169617.jpg?k=2c14e939fb3d9982607c5c1bdf82e2afc4b795bbd25475b53832cf9245c3d81d&o=&hp=1"
        />
        <h1 className="font-bold">villa</h1>
        <p className="text-sm text-gray-500">{Villa}間</p>
      </div>
      <div className="min-w-[150px] h-[200px]  md:w-1/4 md:h-[250px] ">
        <img
          className="w-full h-[150px] md:h-[200px] object-cover"
          alt="類型"
          src="https://morilive.co/wp-content/uploads/2019/11/77350824_2465101157091532_3301917208728305664_o.jpg"
        />
        <h1 className="font-bold">小木屋</h1>
        <p className="text-sm text-gray-500">{小木屋}間</p>
      </div>
      <div className="min-w-[150px] h-[200px]  md:w-1/4 md:h-[250px] ">
        <img
          className="w-full h-[150px] md:h-[200px] object-cover"
          alt="類型"
          src="https://www.hotelscombined.com.tw/news/wp-content/uploads/sites/316/2019/04/160762456-768x511.jpg"
        />
        <h1 className="font-bold">青年旅館</h1>
        <p className="text-sm text-gray-500">{青年旅館}間</p>
      </div>
    </div>
  );
};

export default Categories;
