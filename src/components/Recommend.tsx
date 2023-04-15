import React from "react";

const Recommend = () => {
  return (
    <div className="w-full lg:max-w-[1024px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 lg:flex-wrap">
        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://pix8.agoda.net/hotelImages/488/488905/488905_15031817180026216834.jpg?ca=3&ce=1&s=1024x768"
          />
          <h2 className="font-extrabold text-lg">和逸飯店‧台北民生館</h2>
          <h2 className="text-sm text-gray-500">
            起價
            <span className="text-black text-base font-bold">TWD 7,222</span>
          </h2>
          <span className="text-sm text-gray-500">台北,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              9.5
            </button>
            <span className="text-sm text-gray-500">好極了</span>
          </div>
        </div>

        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://pix8.agoda.net/hotelImages/3174/-1/d2a0b22c95585531cc6c163d0ba9d00d.jpg?ca=28&ce=0&s=1024x768"
          />
          <h2 className="font-extrabold text-lg">台北浮華飯店</h2>
          <h2 className="text-sm text-gray-500">
            起價{" "}
            <span className="text-black text-base font-bold">TWD 5,222</span>
          </h2>
          <span>台北,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              8.5
            </button>{" "}
            <span className="text-sm text-gray-500">很讚</span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://pix8.agoda.net/hotelImages/2992557/-1/3f5952ccf1e82a1a0bb3a14cf8035bca.jpg?ca=6&ce=1&s=1024x768"
          />
          <h2 className="font-extrabold text-lg">晶英國際行館</h2>
          <h2 className="text-sm text-gray-500">
            起價{" "}
            <span className="text-black text-base font-bold">TWD 7,222</span>
          </h2>
          <span>高雄,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              9.1
            </button>{" "}
            <span className="text-sm text-gray-500">好極了</span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://cdn2.ettoday.net/images/4789/d4789146.jpg"
          />
          <h2 className="font-extrabold text-lg">悅來居莊園</h2>
          <h2 className="text-sm text-gray-500">
            起價{" "}
            <span className="text-black text-base font-bold">TWD 7,222</span>
          </h2>
          <span>嘉義,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              7.5
            </button>{" "}
            <span className="text-sm text-gray-500">很讚</span>
          </div>
        </div>

        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://pix8.agoda.net/hotelImages/488/488905/488905_15031817180026216834.jpg?ca=3&ce=1&s=1024x768"
          />
          <h2 className="font-extrabold text-lg">和逸飯店‧台北民生館</h2>
          <h2 className="text-sm text-gray-500">
            起價{" "}
            <span className="text-black text-base font-bold">TWD 7,222</span>
          </h2>
          <span>台北,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              9.5
            </button>{" "}
            <span className="text-sm text-gray-500">好極了</span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] mx-auto ">
          <img
            className="w-full h-3/4 object-cover"
            alt="推薦旅館"
            src="https://www.hotelscombined.com.tw/news/wp-content/uploads/sites/316/2018/06/BBBooks1-768x449.jpg"
          />
          <h2 className="font-extrabold text-lg">友愛街旅館</h2>
          <h2 className="text-sm text-gray-500">
            起價{" "}
            <span className="text-black text-base font-bold">TWD 7,222</span>
          </h2>
          <span>台南,台灣</span>
          <div>
            <button className="w-[25px] h-[25px] text-white rounded bg-[#003580]">
              8.3
            </button>{" "}
            <span className="text-sm text-gray-500">很讚</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
