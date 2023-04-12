import { faBed ,faBars,faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const NavBar = () => {
  return (
    <div className='h-40 px-4 bg-[#003580] text-white flex flex-col items-center '>
        <div className='py-4 w-full max-w-[1024px] flex items-center justify-between '>
            <span className='font-bold text-xl'>Dooking.com</span>
            
            <div className='flex gap-4 md:hidden'>
            <FontAwesomeIcon className='text-2xl' icon={faCircleUser} />
            <FontAwesomeIcon className='text-2xl' icon={faBars} />

            </div>
            <div className='hidden md:block'>
            <button className='ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white'>註冊</button>
                <button className='ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white'>登入</button>
            </div>
        </div>
        <div className=' w-full max-w-[1024px] flex items-center justify-between '>
        <button className='px-4 py-2 flex items-center gap-2 border border-white rounded-xl '>
        <FontAwesomeIcon icon={faBed} /> <span>住宿</span></button>
        </div>
      
        </div>
  )
}

export default NavBar