import React from "react";
import { useGetFeaturedHotelQuery } from "../store/hotelApi";

const Recommend = () => {
  const { data, isSuccess } = useGetFeaturedHotelQuery("");
  console.log(data, "hotel");
  return (
    <>
      {!isSuccess ? (
        <div className="w-full lg:max-w-[1024px]">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 lg:flex-wrap">
            {data.map((hotel: hotel) => (
              <div className="w-[300px] h-[400px] mx-auto ">
                <img
                  className="w-full h-3/4 object-cover"
                  alt="推薦旅館"
                  src="https://pix8.agoda.net/hotelImages/488/488905/488905_15031817180026216834.jpg?ca=3&ce=1&s=1024x768"
                />
                <h2 className="font-extrabold text-lg">和逸飯店‧台北民生館</h2>
                <h2 className="text-sm text-gray-500">
                  起價
                  <span className="text-black text-base font-bold">
                    TWD 7,222
                  </span>
                </h2>
                <span className="text-sm text-gray-500">台北,台灣</span>
                <div>
                  <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
                    9.5
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Recommend;
