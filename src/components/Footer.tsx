import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#00224f] text-gray-300 text-center py-7 mt-4'>
        
        <h2 className='text-2xl'>省時又省錢！
</h2>
<h2 className='text-md'>現在訂閱，我們將寄送最佳訂房優惠給您。
</h2>
        <div className='mt-4 mx-auto flex justify-center w-full lg:w-[1024px] gap-3'><input className='w-3/4 p-2 rounded' placeholder='您的電郵地址' /> <button className='rounded w-1/4 bg-[#0071c2]'>訂閱</button></div>
        <p className='mt-4'> © 2023 Steven Chiang for practice use only.
</p>
</div>
  )
}

export default Footer