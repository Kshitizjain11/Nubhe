import React from 'react'
import video from "../../assets/page1/Cinematic_Skincare_Cream_Video_Generation.mp4"
const Page1 = () => {
  return (
    <div className='flex h-full  mt-20 w-full'>
        <div className="h-3/4 flex justify-center items-center w-full">
            <video className='rounded-[20px] size-[80%] top-20' muted autoPlay loop src={video}></video>
        </div>

        <div className="absolute text-[#FFFDF5] top-[40%] marcellus left-1/2 -translate-x-1/2 ">
            <h4 className='text-5xl whitespace-nowrap'>Discover what your skin really needs</h4>
            <div className=" mt-38 backdrop-blur-3xl text-4xl border rounded-full text-center mx-70 py-3.5">
            <h4 className='' >Take Quiz</h4>
            </div>
        </div>
    
    </div>
    
  )
}

export default Page1