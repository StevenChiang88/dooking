import React from "react";
import { useGetFeaturedHotelQuery } from "../store/hotelApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Recommend = () => {
  const search = useSelector((state: any) => state.search);

  const navigate = useNavigate();
  const { data, isSuccess } = useGetFeaturedHotelQuery("");
  return (
    <>
      {isSuccess ? (
        <div className="w-full lg:max-w-[1024px]">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 lg:flex-wrap">
            {data.map((hotel: hotel) => (
              <div key={hotel._id} className="w-[300px] h-[400px] mx-auto ">
                <img
                  onClick={() => {
                    if (search.date[0].startDate === undefined) {
                      alert("請先選擇日期");
                      return;
                    }
                    navigate(`hotel/${hotel._id}`);
                  }}
                  className="w-full h-3/4 object-cover cursor-pointer"
                  alt="推薦旅館"
                  src={hotel.photos[0]}
                />
                <h2 className="font-extrabold text-lg">{hotel.name}</h2>
                <h2 className="text-sm text-gray-500">
                  起價
                  <span className="text-black text-base font-bold">
                    {`TWD ${hotel.cheapeastPrice.toLocaleString()}`}
                  </span>
                </h2>
                <span className="text-sm text-gray-500">{`${hotel.city},台灣`}</span>
                <div>
                  <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
                    {hotel.rating}
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
