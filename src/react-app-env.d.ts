/// <reference types="react-scripts" />

type detail = {
  adult: number;
  child: number;
  room: number;
  [key: string]: number;
};

type date = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type hotelCategoriesNumber = {
  飯店: number;
  Villa: number;
  小木屋: number;
  青年旅館: number;
};

type hotel = {
  featured: {
    wifi: true;
    service: true;
    service24: true;
    parking: true;
  };
  _id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  photos: [string];
  desc: string;
  rating: number;
  rooms?: [string];
  cheapeastPrice: number;
  showOnHomePage: boolean;
  __v: number;
};

type room = {
  createdAt: string;
  desc: string;
  maxPeople: number;
  price: number;
  roomNumbers?: [roomNumbers];
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

type roomNumbers = {
  number: number;
  unavailableDates?: [number];
  _id: string;
};

type rtkqFetchArgs = {
  city: string;
  max: number;
  min: number;
};

type budget = {
  min: number;
  max: number;
};

type loginData = {
  data: {
    otherDetails: {
      createdAt: date;
      email: string;
      updatedAt: date;
      username: string;
      __v: number;
      _id: string;
    };
    token: string;
  };
};

type dataForOrder = {
  userToken: string;
  userID: string;
  userName?: string | undefined;
  hotel: string;
  rooms: [
    {
      roomID: string;
      roomTitle: string;
      roomPrice: number;
      roomNumber: number;
    }?
  ];
  startDate: Date;
  endDate: Date;
  price: number;
};

type orderRoomDetail = {
  roomTitle: string;
  roomID: string;
  roomPrice: number;
  roomNumber: number;
};

type dataForUnavailable = {
  dates: [number?];
  id: string;
};
