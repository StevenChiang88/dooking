import React from "react";

const Attractions = () => {
  return (
    <div className="w-full max-w-[1024px]  flex gap-[12px]  overflow-x-scroll lg:overflow-hidden lg:flex-wrap ">
      <div className="min-w-[300px] max-h-[300px] lg:w-[calc(50%_-_6px)] relative ">
        <img
          alt="地點"
          className="w-full h-full "
          src="https://s.yimg.com/ny/api/res/1.2/2TIjAaJy9mC92L82_8P2fQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/8cb549c0-bce3-11e9-aa94-42ce458ae88b"
        />
        <span className="absolute top-4 left-4 text-2xl font-bold text-white">
          台北
        </span>
      </div>

      <div className="min-w-[300px] max-h-[300px] lg:w-[calc(50%_-_6px)] relative ">
        <img
          alt="地點"
          className="w-full  h-full"
          src="https://travel.taichung.gov.tw/content/images/content/attractions/top-ten-pic-01.jpg"
        />
        <span className="absolute top-4 left-4 text-2xl font-bold text-white">
          台中
        </span>
      </div>

      <div className="min-w-[300px] max-h-[300px] lg:w-[calc(33%_-_6px)] relative ">
        <img
          alt="地點"
          className="w-full h-full  "
          src="https://images.chinatimes.com/newsphoto/2023-01-06/1024/20230106004870.jpg"
        />
        <span className="absolute top-4 left-4 text-2xl font-bold text-white">
          高雄
        </span>
      </div>
      <div className="min-w-[300px] max-h-[300px] lg:w-[calc(33%_-_6px)] relative ">
        <img
          alt="地點"
          className="w-full h-full  "
          src="https://www.gomaji.com/blog/wp-content/uploads/2019/12/salt-pan-1745796_1280.jpg"
        />
        <span className="absolute top-4 left-4 text-2xl font-bold text-white">
          台南
        </span>
      </div>
      <div className="min-w-[300px] max-h-[300px] lg:w-[calc(33%_-_6px)] relative ">
        <img
          alt="地點"
          className="w-full h-full  "
          src="https://happytravel.tw/wp-content/uploads/2023/04/batch_0F4A8015.jpg"
        />
        <span className="absolute top-4 left-4 text-2xl font-bold bg-black/30 text-white">
          嘉義
        </span>
      </div>
    </div>
  );
};

export default Attractions;
