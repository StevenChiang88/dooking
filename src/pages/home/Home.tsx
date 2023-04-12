import React from 'react'
import NavBar from '../../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
const Home = () => {

  const [date, setDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date() ,
      key: 'selection'
    }
  ]);

  const [detail, setDetail] = useState<detail>({
    adult: 1,
    child: 0,
    room: 1
  })

  const [dateOpen,setDateOpen] = useState<boolean>(false)
  const [detailOpen,setDetailOpen] = useState<boolean>(false)

  const detailHandler = (name:string,method:string)=>{
  
    setDetail((prev)=>{
      return{
      ...prev,
      [name]: method==="plus"? detail[name] +1: detail[name]-1 
     }
     }
    )
   }


  

  return (
    <div >
      <NavBar/>
      <div >
      <div className='text-white bg-[#003580] flex justify-center pb-8 relative'>
        <div className='w-full max-w-[1024px] '>
        <h1 className='text-5xl font-bold'>尋找下趟住宿</h1>
    <h3 className='text-2xl py-8' >搜尋飯店、民宿及其他住宿類型的優惠…</h3>
   
    <div className='w-full max-w-[1024px]  p-1 border-4 bg-white border-[#febb02] gap-2 md:h-[60px] md:absolute md:bottom-[-30px] flex justify-between flex-col md:flex-row '>
     
      <div className='bg-white p-3  flex items-center gap-2 flex-auto'>
        <FontAwesomeIcon className='text-gray-500' icon={faBed} />
        <input className='text-gray-500 w-full outline-none cursor-pointer' placeholder='你要去哪裡?'/>
      </div>      
      <div className='bg-white p-3 flex items-center gap-2'>
        <FontAwesomeIcon className='text-gray-500' icon={faCalendar} />
        <span onClick={()=>{setDateOpen(!dateOpen)}} className='text-gray-500 cursor-pointer'>{`${format(date[0].startDate,"MM/dd/yyyy")} - ${format(date[0].endDate,"MM/dd/yyyy")}`}</span> 
       {dateOpen&& <DateRange
        className='absolute top-[250px] md:top-[55px] shadow-md'
        onChange={(item) => {
          setDate([item.selection])
          setDateOpen(!dateOpen)}}
  editableDateInputs={true}
  moveRangeOnFirstSelection={false}
  ranges={date}
/>}
       
             </div>      
      <div className='bg-white p-3  flex items-center gap-2 flex-auto'>
        <FontAwesomeIcon className='text-gray-500' icon={faUser} />
<span onClick={()=>{setDetailOpen(!detailOpen)}} className='text-gray-500 cursor-pointer'>{`${detail.adult}位成人．${detail.child}位孩童．${detail.room}間房`}</span>     
{detailOpen && <div className='w-[380px] absolute bg-white top-[300px] md:top-[55px] shadow-md px-4 py-8 text-black'>
<div className='flex items-center justify-between pb-4 border-b'>
  <span>成人</span>
  <div className='flex gap-4 items-center'>
  <button  disabled={detail.adult<=1} onClick={()=>{detailHandler("adult","minus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >-</button>
  <span>{detail.adult}</span>
  <button onClick={()=>{detailHandler("adult","plus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >+</button>
  </div>
</div>

<div className='flex items-center justify-between py-4 border-b'>
  <span>孩童</span>
  <div className='flex gap-4 items-center'>
  <button  disabled={detail.child<=0} onClick={()=>{detailHandler("child","minus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >-</button>
  <span>{detail.child}</span>
  <button onClick={()=>{detailHandler("child","plus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >+</button>
  </div>
</div>

<div className='flex items-center justify-between py-4 border-b'>
  <span>客房</span>
  <div className='flex gap-4 items-center'>
  <button  disabled={detail.room<=1} onClick={()=>{detailHandler("room","minus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >-</button>
  <span>{detail.room}</span>
  <button   onClick={()=>{detailHandler("room","plus")}} className='w-[35px] h-[35px] border cursor-pointer border-[#003580]' >+</button>
  </div>
</div>

<div className='flex items-center justify-center py-2 mt-4 w-full border border-[#003580] '>
    <button onClick={()=>{setDetailOpen(false)}}>完成</button>
  </div>
  </div>  }



</div>
      <div className='flex-auto'>
      <button className='bg-[#003580] w-full h-full '>搜尋</button>    
      </div>
      
      </div>
        </div>
    

      </div>
   
   </div>
    </div>
  )
}

export default Home