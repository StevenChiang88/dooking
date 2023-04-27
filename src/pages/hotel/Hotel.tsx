import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faClockRotateLeft,
  faParking,
  faUserTie,
  faWifi,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useGetHotelByIdQuery } from "../../store/hotelApi";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const { data, isSuccess } = useGetHotelByIdQuery(
    location.pathname.split("/")[2]
  );

  console.log(data);

  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [slideOpen, setSlideOpen] = useState<boolean>(false);
  const handleSlide = (number: number) => {
    setSlideOpen(true);
    setSlideNumber(number);
  };

  const slideController = (action: string) => {
    let x: number;

    if (action === "right") {
      x = slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    } else x = slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    console.log(slideNumber);

    setSlideNumber(x);
  };

  return (
    <div>
      <NavBar />
      {slideOpen && (
        <div className="sticky top-0 left-0 w-full h-screen bg-black/80 flex items-center justify-center">
          <FontAwesomeIcon
            onClick={() => {
              setSlideOpen(false);
            }}
            className="cursor-pointer absolute top-4 right-4 text-gray-300 text-4xl"
            icon={faXmarkCircle}
          />
          <FontAwesomeIcon
            onClick={() => {
              slideController("left");
            }}
            className=" text-gray-300 text-4xl mr-8 cursor-pointer"
            icon={faCircleArrowLeft}
          />
          <img
            className="w-[80vw] h-[80vh] object-cover"
            alt="asd"
            src={data.photos[slideNumber]}
          />
          <FontAwesomeIcon
            onClick={() => {
              slideController("right");
            }}
            className=" text-gray-300 text-4xl ml-8 cursor-pointer"
            icon={faCircleArrowRight}
          />
        </div>
      )}
      {!isSuccess ? (
        <p>loading...</p>
      ) : (
        <div className="w-full p-6 lg:p-0 lg:max-w-[1024px] mx-auto">
          <div className=" flex justify-between my-8">
            <div>
              <button className="flex items-center justify-center text-white rounded-sm py-1 px-2 bg-gray-500">
                {data.type}
              </button>
              <button className="my-4 w-[30px] h-[30px] flex items-center justify-center text-white rounded p-2 bg-[#003580]">
                {data.rating}
              </button>
              <h1 className="text-xl font-bold">{data.name}</h1>
              <p className="text-sm text-gray-500">{`${data.city},台灣`}</p>
            </div>
            <div>
              <button className="px-4 py-2 bg-[#4175be] text-white">
                現在就預約
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <img
              onClick={() => {
                handleSlide(0);
              }}
              className=" w-full  object-cover"
              alt="旅館照片"
              src={data.photos[0]}
            />
          </div>
          <div className="hidden lg:grid grid-cols-6 grid-rows-3 h-[750px] gap-4">
            <img
              onClick={() => {
                handleSlide(0);
              }}
              className="cursor-pointer col-start-1 col-end-3 row-start-1 row-end-2 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[0]}
            />
            <img
              onClick={() => {
                handleSlide(1);
              }}
              className="cursor-pointer col-start-1 col-end-3 row-start-2 row-end-3 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[1]}
            />
            <img
              onClick={() => {
                handleSlide(2);
              }}
              className="cursor-pointer col-start-3 col-end-7 row-start-1 row-end-3 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[2]}
            />
            <img
              onClick={() => {
                handleSlide(3);
              }}
              className="cursor-pointer col-start-1 col-end-2 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[3]}
            />
            <img
              onClick={() => {
                handleSlide(4);
              }}
              className="cursor-pointer col-start-2 col-end-3 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[4]}
            />
            <img
              onClick={() => {
                handleSlide(5);
              }}
              className="cursor-pointer col-start-3 col-end-5 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[5]}
            />
            <img
              onClick={() => {
                handleSlide(6);
              }}
              className="cursor-pointer col-start-5 col-end-7 w-full h-full object-cover"
              alt="旅館照片"
              src={data.photos[6]}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-7">
            <div className="flex-[3]">
              <h1 className="text-lg font-bold"> 住宿介紹</h1>
              <span>{data.desc}</span>
            </div>
            <div className="mt-7 lg:mt-0 bg-[#e4f4ff] p-4 flex-[1] ">
              <h3>熱門設施</h3>
              <div className=" flex flex-col justify-start gap-2 items-start ">
                {data.featured.wifi && (
                  <div>
                    <FontAwesomeIcon icon={faWifi} />
                    <span className="ml-2">WIFI</span>
                  </div>
                )}
                {data.featured.service && (
                  <div>
                    <FontAwesomeIcon icon={faUserTie} />
                    <span className="ml-2">客房服務</span>
                  </div>
                )}
                {data.featured.service24 && (
                  <div>
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    <span className="ml-2">24小時服務</span>
                  </div>
                )}
                {data.featured.parking && (
                  <div>
                    <FontAwesomeIcon icon={faParking} />
                    <span className="ml-2">停車場</span>
                  </div>
                )}
              </div>
              <p className="font-bold text-xl my-2">
                $ {`${data.cheapeastPrice}`}
              </p>
              <button className="px-4 py-2 bg-[#4175be] text-white">
                現在就預約
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Hotel;
