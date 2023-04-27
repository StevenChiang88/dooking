import React from "react";
import NavBar from "../../components/NavBar";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { useGetHotelQuery } from "../../store/hotelApi";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDestination,
  updateDetail,
} from "../../store/reducer/searchSlice";

const Hotels = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.search);
  const [budget, setBudget] = useState<budget>({
    min: 0,
    max: 10000000,
  });
  const { data, isSuccess } = useGetHotelQuery({
    city: search.destination || "台北",
    min: budget.min,
    max: budget.max,
  });
  const [dateOpen, setDateOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const detailHandler = (name: string, method: string) => {
    let x = {
      ...search.detail,
      [name]:
        method === "plus" ? search.detail[name] + 1 : search.detail[name] - 1,
    };
    dispatch(updateDetail({ detail: x }));
  };
  return (
    <div>
      <NavBar />
      <div className="w-full lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto lg:mt-7 gap-4">
        <div className="bg-[#febb02] flex-[1] h-[600px] p-4 flex flex-col lg:sticky top-5">
          <h2 className="text-xl">搜尋</h2>
          <h3 className="my-2">目的地：</h3>
          <input
            className="p-2"
            onChange={(e) => {
              dispatch(updateDestination({ destination: e.target.value }));
            }}
            placeholder={search.destination}
          />
          <h3 className="my-2">入住期間</h3>
          <div className="relative">
            <div className="flex items-center gap-2 bg-white p-2">
              <FontAwesomeIcon icon={faCalendar} />
              <span
                onClick={() => {
                  setDateOpen(!dateOpen);
                }}
                className="text-gray-500 cursor-pointer"
              >{`${format(search.date[0].startDate, "MM/dd/yyyy")} - ${format(
                search.date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>

            {dateOpen && (
              <DateRange
                className="z-10 absolute  left-0 shadow-md"
                onChange={(item) => {
                  setDateOpen(!dateOpen);
                }}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={search.date}
                minDate={new Date()}
              />
            )}
            <h3 className="my-2">人數/房數</h3>
            <h1
              onClick={() => {
                setDetailOpen(!detailOpen);
              }}
              className="p-2 bg-white text-gray-500 cursor-pointer"
            >{`${search.detail.adult}位成人．${search.detail.child}位孩童．${search.detail.room}間房`}</h1>
            {detailOpen && (
              <div className="z-10 w-[380px] absolute bg-white   shadow-md px-4 py-8 text-black">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span>成人</span>
                  <div className="flex gap-4 items-center">
                    <button
                      disabled={search.detail.adult <= 1}
                      onClick={() => {
                        detailHandler("adult", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{search.detail.adult}</span>
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
                      disabled={search.detail.child <= 0}
                      onClick={() => {
                        detailHandler("child", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{search.detail.child}</span>
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
                      disabled={search.detail.room <= 1}
                      onClick={() => {
                        detailHandler("room", "minus");
                      }}
                      className="w-[35px] h-[35px] border cursor-pointer border-[#003580]"
                    >
                      -
                    </button>
                    <span>{search.detail.room}</span>
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
                    className="w-full"
                    onClick={() => {
                      setDetailOpen(false);
                    }}
                  >
                    完成
                  </button>
                </div>
              </div>
            )}

            <h3 className="my-2">房價預算</h3>
            <div className="w-full flex items-center justify-between">
              <label>Min:</label>
              <input className=" p-2" defaultValue={budget.min} />
            </div>
            <div className="mt-2 w-full flex items-center justify-between">
              <label>Max:</label>
              <input type="number" className=" p-2" defaultValue={budget.max} />
            </div>
          </div>
          <button
            onClick={() =>
              navigate(
                `/hotels/?city=${search.destination}&min=${budget.min}&max=${budget.max}`
              )
            }
            className="w-full mt-6 p-4 bg-[#003580] text-white"
          >
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
