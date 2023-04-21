import React from "react";
import NavBar from "../../components/NavBar";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import format from "date-fns/format";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetHotelQuery } from "../../store/hotelApi";

const Hotels = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isSuccess } = useGetHotelQuery({
    city: "台北",
    min: 10,
    max: 100000,
  });
  console.log(data, "DATA");
  const [dateOpen, setDateOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const [date, setDate] = useState<any>(location.state.date);
  const [destination, setDestination] = useState<string>(
    location.state.destination
  );
  const [detail, setDetail] = useState<detail>(location.state.detail);
  const detailHandler = (name: string, method: string) => {
    setDetail((prev) => {
      return {
        ...prev,
        [name]: method === "plus" ? detail[name] + 1 : detail[name] - 1,
      };
    });
  };
  return (
    <div>
      <NavBar />
      <div className="w-full lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto lg:mt-7 gap-4">
        <div className="bg-[#febb02] flex-[1] h-[400px] p-4 flex flex-col lg:sticky top-5">
          <h2 className="text-xl">搜尋</h2>
          <h3 className="my-2">目的地：</h3>
          <input className="p-2" placeholder={destination} />
          <h3 className="my-2">入住期間</h3>
          <div className="relative">
            <div className="flex items-center gap-2 bg-white p-2">
              <FontAwesomeIcon icon={faCalendar} />
              <span
                onClick={() => {
                  setDateOpen(!dateOpen);
                }}
                className="text-gray-500 cursor-pointer"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>

            {dateOpen && (
              <DateRange
                className="z-10 absolute  left-0 shadow-md"
                onChange={(item) => {
                  setDate([item.selection]);
                  setDateOpen(!dateOpen);
                }}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />
            )}
            <h3 className="my-2">人數/房數</h3>
            <h1
              onClick={() => {
                setDetailOpen(!detailOpen);
              }}
              className="p-2 bg-white text-gray-500 cursor-pointer"
            >{`${detail.adult}位成人．${detail.child}位孩童．${detail.room}間房`}</h1>
            {detailOpen && (
              <div className="z-10 w-[380px] absolute bg-white   shadow-md px-4 py-8 text-black">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span>成人</span>
                  <div className="flex gap-4 items-center">
                    <button
                      disabled={detail.adult <= 1}
                      onClick={() => {
                        detailHandler("adult", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{detail.adult}</span>
                    <button
                      onClick={() => {
                        detailHandler("adult", "plus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b">
                  <span>孩童</span>
                  <div className="flex gap-4 items-center">
                    <button
                      disabled={detail.child <= 0}
                      onClick={() => {
                        detailHandler("child", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{detail.child}</span>
                    <button
                      onClick={() => {
                        detailHandler("child", "plus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b">
                  <span>客房</span>
                  <div className="flex gap-4 items-center">
                    <button
                      disabled={detail.room <= 1}
                      onClick={() => {
                        detailHandler("room", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{detail.room}</span>
                    <button
                      onClick={() => {
                        detailHandler("room", "plus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2 mt-4 w-full border border-[#003580] ">
                  <button
                    onClick={() => {
                      setDetailOpen(false);
                    }}
                  >
                    完成
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className="w-full mt-6 p-4 bg-[#003580] text-white">
            搜尋
          </button>
        </div>
        <div className="flex-[3] flex gap-2 flex-col">
          {isSuccess ? (
            data.length === 0 ? (
              <p>沒有您的搜尋結果</p>
            ) : (
              data.map((hotel: hotel) => (
                <div
                  key={hotel._id}
                  className="w-full h-[250px] p-2 border border-gray-500 flex gap-4 "
                >
                  <img
                    onClick={() => {
                      navigate(`/hotel/${hotel._id}`);
                    }}
                    className="cursor-pointer w-[180px] md:w-[220px] h-full object-cover"
                    alt={hotel._id}
                    src={hotel.photos[0]}
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h2 className="text-xl font-bold text-[#0071c2]">
                        {hotel.name}
                      </h2>
                      <div className="flex items-center gap-2">
                        <button className="bg-[#003580] text-white p-2 rounded">
                          {hotel.rating}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-[#008009] border-l-2 pl-2 hidden md:block">
                        <h3 className="font-bold text-black">
                          雙人房－附私人衛浴
                        </h3>
                        <h3>免費取消</h3>
                        <h3>立即搶下優惠價－可取消</h3>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-right">
                          {`TWD ${hotel.cheapeastPrice}`}
                        </h3>
                        <h3 className="text-sm text-gray-500 my-2 text-right my-">
                          含稅費及其他費用
                        </h3>
                        <button
                          onClick={() => {
                            navigate(`/hotel/${hotel._id}`);
                          }}
                          className="text-sm px-4 py-2 bg-[#003580] text-white"
                        >
                          查看客房供應情況
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
