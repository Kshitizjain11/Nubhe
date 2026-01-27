import React from 'react'
import video from "../../assets/page1/Cinematic_Skincare_Cream_Video_Generation.mp4"
const Page1 = () => {
  return (
    <div className='flex h-full  mt-20 w-full'>
        <div className="h-3/4 flex justify-center items-center w-full">
        <video className='rounded-[20px] size-[80%] top-20' autoPlay loop src={video}></video>
        </div>
        <div className="marcellus">
            <h1>Discover what your skin really needs</h1>
        </div>
    </div>
  )
}

export default Page1