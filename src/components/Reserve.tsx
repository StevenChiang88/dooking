import React, { useEffect, useState } from "react";
import { useGetHotelRoomsQuery } from "../store/hotelApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import ConfirmOrder from "./ConfirmOrder";
import { useNavigate } from "react-router-dom";

type props = {
  hotelID: string;
};

const Reserve = ({ hotelID }: props) => {
  const navigate = useNavigate();
  const { data, isSuccess } = useGetHotelRoomsQuery(hotelID);
  const selector = useSelector((state: any) => state.search);
  const auth = useSelector((state: any) => state.auth);

  if (selector.date[0].startDate === undefined) {
    navigate("/");
  }

  // const username = auth.user.username;
  // const userID = auth.user._id;
  const [dataForOrder, setDataForOrder] = useState<dataForOrder>({
    userToken: auth.token,
    userID: auth.user?._id,
    userName: auth.user?.username,
    hotel: hotelID,
    rooms: [],
    startDate: selector.date[0].startDate,
    endDate: selector.date[0].endDate,
    price: 0,
  });

  let Dates: [number?] = [];
  const startdate = new Date(selector.date[0].startDate);
  const endDate = new Date(selector.date[0].endDate);
  while (startdate <= endDate) {
    Dates.push(startdate.getTime());
    startdate.setDate(startdate.getDate() + 1);
  }

  const [datasForUnavailable, setDatasForUnavailable] = useState<
    [dataForUnavailable?]
  >([]);
  const [confirmOrderOpen, setConfirmOrderOpen] = useState<Boolean>(false);

  const ifDataisReady = () => {
    if (!auth.user) {
      alert("請登入後再訂房");
      return;
    }
    if (dataForOrder.rooms.length === 0) {
      alert("請勾選至少一間房型");
      return;
    }
    setConfirmOrderOpen(true);
  };

  const roomHandler = (
    e: any,
    roomPrice: number,
    orderRoomDetail: orderRoomDetail
  ) => {
    let x = dataForOrder.rooms;
    let y = dataForOrder.price;

    let dataForUnavailable = {
      dates: Dates,
      id: e.target.value,
    };
    if (e.target.checked === true) {
      y += roomPrice;
      x?.push(orderRoomDetail);
      setDataForOrder((prev) => {
        return { ...prev, price: y, rooms: x };
      });
      //處理room資料給updateUnavailable room
      let s = datasForUnavailable;
      s.push(dataForUnavailable);
      setDatasForUnavailable(s);
    } else {
      //處理room資料給updateUnavailable room
      let unavailable: any = [];
      unavailable = datasForUnavailable.filter(
        (room) => room?.id !== e.target.value
      );
      setDatasForUnavailable(unavailable);
      //處理要post給order的資料
      let z: any = [];
      z = x.filter((item) => item?.roomID !== e.target.value);
      y -= roomPrice;
      setDataForOrder((prev) => {
        return { ...prev, price: y, rooms: z };
      });
    }
  };

  //拿到room日期，看日期有沒有include  Dates的日期
  const isAvailabe = (roomUnavailableDates: [number] | undefined) => {
    let y;
    roomUnavailableDates?.forEach((date) => {
      const x = Dates.includes(new Date(date).getTime());
      if (x == true) {
        y = true;
      }
    });

    return y;
  };
  return (
    <div className="w-full lg:max-w-[1024px] mt-7 border-t mx-auto">
      {confirmOrderOpen && (
        <ConfirmOrder
          setConfirmOrderOpen={setConfirmOrderOpen}
          dataForOrder={dataForOrder}
          Dates={Dates}
          datasForUnavailable={datasForUnavailable}
        />
      )}
      <h2
        onClick={() => {
          console.log(datasForUnavailable, "NOW");
        }}
      >
        空房情況
      </h2>
      <div>
        {isSuccess == true && data.length === 0 ? <p>此旅館無空房</p> : null}
        {isSuccess ? (
          data.map((room: room) => (
            <div
              className="w-full min-h-[200px] border my-3 p-4 flex flex-col lg:flex-row"
              key={room._id}
            >
              <div className="flex-[2] flex flex-col justify-between ">
                <h2 className="underline text-[#0071c2]"> {room.title}</h2>
                <h3 className="text-sm text-gray-500 w-3/4">{room.desc}</h3>
                <p className="text-sm text-gray-500">
                  最多 <FontAwesomeIcon className="text-black" icon={faUser} />{" "}
                  x {room.maxPeople}
                </p>
                <div className="flex gap-2">
                  {room.roomNumbers?.map((roomNumber) => (
                    <div
                      key={roomNumber._id}
                      className="border p-2 flex gap-1 "
                    >
                      {roomNumber.number}
                      <input
                        disabled={isAvailabe(roomNumber.unavailableDates)}
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={(e) => {
                          roomHandler(e, room.price, {
                            roomTitle: room.title,
                            roomID: e.target.value,
                            roomPrice: room.price,
                            roomNumber: roomNumber.number,
                          });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-[1] flex flex-col justify-between">
                <p>
                  {`${format(
                    selector.date[0].startDate,
                    "yyyy/MM/dd"
                  )} - ${format(selector.date[0].endDate, "yyyy/MM/dd")}`}
                </p>
                <h2 className="text-xl font-bold">
                  $ {room.price.toLocaleString()} / 晚
                </h2>
                <p className="text-sm text-gray-500">含稅費與其他費用</p>

                <button
                  onClick={() => {
                    ifDataisReady();
                  }}
                  className="px-4 py-2 bg-[#4175be] text-white"
                >
                  現在就預約
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>data loading...</p>
        )}
      </div>
    </div>
  );
};

export default Reserve;
