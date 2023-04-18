/// <reference types="react-scripts" />

type detail = {
    adult: number,
    child: number,
    room: number,
    [key: string]: number;

}

type hotelCategoriesNumber = {
    飯店: number,
    Villa: number,
    小木屋: number,
    青年旅館: number
}

type hotel =   {
    featured: {
        wifi: true,
        service: true,
        service24: true,
        parking: true
    },
    _id: string,
    name: string,
    type: string,
    city: string,
    address: string,
    photos: [string],
    desc: string,
    rating: number,
    rooms?: [string],
    cheapeastPrice: number,
    showOnHomePage: boolean,
    __v: number
}