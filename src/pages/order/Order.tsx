import React from "react";
import NavBar from "../../components/NavBar";
import { useGetOrderQuery } from "../../store/orderApi";
import { format } from "date-fns";

const Order = () => {
  const { data, isError } = useGetOrderQuery("");

  return (
    <div>
      <NavBar />
      <div className="text-center text-3xl mt-6">訂單紀錄</div>
      <div className="flex justify-between mx-auto gap-5 border-b-2 my-4 max-w-[1024px]">
        <div className="w-[100px]">訂購日期</div>
        <div className="w-[300px]">入住飯店</div>
        <div className="w-[200px]">房間資訊</div>
        <div className="w-[100px]">入住日期</div>
        <div className="w-[100px]">退房日期</div>
        <div className="w-[100px]">價格</div>
      </div>

      {data ? (
        data.map((data: any) => (
          <div
            key={data._id}
            className="border-b my-2 flex justify-between mx-auto gap-6  max-w-[1024px]"
          >
            <div className="w-[100px]">
              {format(new Date(data.updatedAt), "yyyy/MM/dd")}
            </div>
            <div className="w-[300px]">{data.hotel}</div>
            <div className="w-[200px]">
              {data.rooms.map((room: any) => (
                <div className="flex gap-5">
                  <div>-{room.roomTitle}</div>
                  <div>價格: {room.roomPrice.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="w-[100px]">
              {format(new Date(data.startDate), "yyyy/MM/dd")}
            </div>
            <div className="w-[100px]">
              {format(new Date(data.endDate), "yyyy/MM/dd")}
            </div>
            <div className="w-[100px]">{data.price.toLocaleString()}</div>
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Order;
