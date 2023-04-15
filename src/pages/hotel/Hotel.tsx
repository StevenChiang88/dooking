import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faWifi,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const imgSrc = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/284217079.jpg?k=14c43a60d8466204e892340b35ec5586e5fa0375191489497fe35756ba869652&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76205248.jpg?k=d397453b5eefcb5e589ba0c1d2f46113ba49150ccf777417c396c627db38a538&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/284217216.jpg?k=edb973b1e43a57307040c57e89bce2c4e55b0b3c7c84125fdd6be49e996a740b&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76205199.jpg?k=0bae411c12ce03853e8515d41f0c2ffdb81166580cc11cbacd7cf17d112d0b40&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76205210.jpg?k=a0ebe40e377b3dede3489f6889063852d2a4373bf4bdf8894e39c2824b64bee7&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76284111.jpg?k=56a9a98797728b42b191bd403bdc7164bd24e3801bdefea05b75a9223957f2f5&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76205264.jpg?k=478bfa8f40a429c1ee4728a9d095e1416c03579bd29c9fb702f19d1431d704dd&o=&hp=1",
];

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [slideOpen, setSlideOpen] = useState<boolean>(false);
  const handleSlide = (number: number) => {
    setSlideOpen(true);
    setSlideNumber(number);
  };

  const slideController = (action: string) => {
    let x: number;

    if (action === "right") {
      x = slideNumber === imgSrc.length - 1 ? 0 : slideNumber + 1;
    } else x = slideNumber === 0 ? imgSrc.length - 1 : slideNumber - 1;
    console.log(slideNumber);

    setSlideNumber(x);
  };

  return (
    <div>
      <NavBar />
      {slideOpen && (
        <div className="sticky top-0 left-0 w-full h-screen bg-black/60 flex items-center justify-center">
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
            src={imgSrc[slideNumber]}
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
      <div className="w-full p-6 lg:p-0 lg:max-w-[1024px] mx-auto">
        <div className=" flex justify-between my-8">
          <div>
            <button className="flex items-center justify-center text-white rounded-sm py-1 px-2 bg-gray-500">
              飯店
            </button>
            <button className="my-4 w-[30px] h-[30px] flex items-center justify-center text-white rounded p-2 bg-[#003580]">
              8.8
            </button>
            <h1 className="text-xl font-bold">飯店名稱</h1>
            <p className="text-sm text-gray-500">台灣,台北</p>
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
            src={imgSrc[0]}
          />
        </div>
        <div className="hidden lg:grid grid-cols-6 grid-rows-3 h-[750px] gap-4">
          <img
            onClick={() => {
              handleSlide(0);
            }}
            className="cursor-pointer col-start-1 col-end-3 row-start-1 row-end-2 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[0]}
          />
          <img
            onClick={() => {
              handleSlide(1);
            }}
            className="cursor-pointer col-start-1 col-end-3 row-start-2 row-end-3 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[1]}
          />
          <img
            onClick={() => {
              handleSlide(2);
            }}
            className="cursor-pointer col-start-3 col-end-7 row-start-1 row-end-3 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[2]}
          />
          <img
            onClick={() => {
              handleSlide(3);
            }}
            className="cursor-pointer col-start-1 col-end-2 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[3]}
          />
          <img
            onClick={() => {
              handleSlide(4);
            }}
            className="cursor-pointer col-start-2 col-end-3 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[4]}
          />
          <img
            onClick={() => {
              handleSlide(5);
            }}
            className="cursor-pointer col-start-3 col-end-5 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[5]}
          />
          <img
            onClick={() => {
              handleSlide(6);
            }}
            className="cursor-pointer col-start-5 col-end-7 w-full h-full object-cover"
            alt="旅館照片"
            src={imgSrc[6]}
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-7">
          <div className="flex-[3]">
            <h1 className="text-lg font-bold"> 住宿介紹</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              necessitatibus, distinctio error omnis vitae architecto blanditiis
              nesciunt, consectetur ducimus ex quae perferendis ad! Porro error
              tempora ea illum qui consequuntur.distinctio error omnis vitae
              architecto blanditiis nesciunt, consectetur ducimus ex quae
              perferendis ad! Porro error tempora ea illum qui consequuntur.
            </span>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              necessitatibus, distinctio error omnis vitae architecto blanditiis
              nesciunt, consectetur ducimus ex quae perferendis ad! Porro error
              tempora ea illum qui consequuntur.distinctio error omnis vitae
              architecto blanditiis nesciunt, consectetur ducimus ex quae
              perferendis ad! Porro error tempora ea illum qui consequuntur.
            </div>
          </div>
          <div className="bg-[#e4f4ff] p-4 flex-[1] ">
            <h3>熱門設施</h3>
            <div className="flex flex-col justify-start gap-2 items-start ">
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <span className="ml-2">WIFI</span>
              </div>{" "}
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <span className="ml-2">WIFI</span>
              </div>{" "}
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <span className="ml-2">WIFI</span>
              </div>{" "}
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <span className="ml-2">WIFI</span>
              </div>
            </div>
            <p className="font-bold text-xl my-2">$ 888</p>
            <button className="px-4 py-2 bg-[#4175be] text-white">
              現在就預約
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hotel;
