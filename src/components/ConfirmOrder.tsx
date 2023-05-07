import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../store/orderApi";
import { useUpdateRoomAvailableDateMutation } from "../store/roomsApi";
import { useNavigate } from "react-router-dom";

type Props = {
  setConfirmOrderOpen: (open: boolean) => void;
  dataForOrder: dataForOrder;
  Dates: [number?];
  datasForUnavailable: [dataForUnavailable?];
};

const ConfirmOrder = ({
  setConfirmOrderOpen,
  dataForOrder,
  Dates,
  datasForUnavailable,
}: Props) => {
  const navigate = useNavigate();
  const search = useSelector((state: any) => state.search);
  const [addOrderFn, { isError: addOrderError }] = useAddOrderMutation();
  const [updateDateFn, { isError: updateDateError }] =
    useUpdateRoomAvailableDateMutation();

  const takeOrder = async () => {
    try {
      const addOrder: any = await addOrderFn(dataForOrder);

      if (!addOrder.error) {
        await Promise.all(
          datasForUnavailable.map((data) => {
            return updateDateFn(data);
          })
        );
        navigate("/order");
      }
    } catch (err) {
      alert("下訂失敗");
      console.log(err);
      console.log(addOrderError, "新增訂單有誤");
      console.log(updateDateError, "更新訂購日有誤");
    }

    // const result = await Promise.all([updateUnavalableDates, addOrder]);
  };
  return (
    <div className="fixed top-0 right-0 w-screen h-screen bg-black/70 ">
      <FontAwesomeIcon
        onClick={() => {
          setConfirmOrderOpen(false);
        }}
        className="text-white absolute text-4xl cursor-pointer top-6 right-6"
        icon={faCircleXmark}
      />
      <div className="flex flex-col justify-between bg-white w-[300px] lg:w-[500px] h-[400px] overflow-y-auto absolute top-0 left-0 bottom-0 right-0 m-auto p-6">
        <div className="flex justify-between">
          <div>訂購者:</div>
          <div>{dataForOrder.userName}</div>
        </div>
        <div className="flex justify-between">
          <div>本次旅行共: </div>
          <div>{`${search.detail.adult}位大人  ${search.detail.child}位小孩`}</div>
        </div>

        {dataForOrder.rooms.map((room) => (
          <div
            className="flex justify-between my-2 py-2 border-b"
            key={room?.roomID}
          >
            <div className="flex gap-4">
              <div>{`房號 ${room?.roomNumber}`}</div>
              <div>{`${room?.roomTitle}`}</div>
            </div>

            <div>{`${room?.roomPrice.toLocaleString()}元/晚`}</div>
          </div>
        ))}
        <div className="flex justify-between">
          <div>{`入住期間共 ${Dates.length} 晚`} </div>
          <div>
            {`${format(
              new Date(dataForOrder.startDate),
              "yyyy/MM/dd"
            )}~${format(new Date(dataForOrder.endDate), "yyyy/MM/dd")}`}
          </div>
        </div>

        <div className="flex justify-between">
          <div>總金額 </div>
          <div>{(dataForOrder.price * Dates.length).toLocaleString()}</div>
        </div>

        <button
          onClick={() => {
            takeOrder();
          }}
          className="px-4 py-2 bg-[#4175be] text-white"
        >
          下訂
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
