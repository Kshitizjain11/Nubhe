import React, { useRef, useState } from 'react'
import video from "../../assets/page1/Cinematic_Skincare_Cream_Video_Generation.mp4"

const Page1 = () => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const handleClick = () => {
    if (!videoRef.current) return

    if (isMuted) {
      videoRef.current.muted = false
      videoRef.current.volume = 1
      videoRef.current.play()
    } else {
      videoRef.current.muted = true
    }

    setIsMuted(!isMuted)
  }

  return (
    <div className="flex h-full pt-20 w-full">
      <div
        className="h-3/4 flex justify-center items-center w-full"
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          className="rounded-[20px] top-20"
          muted
          autoPlay
          loop
          playsInline
          src={video}
        />
      </div>

      {/* Overlay text */}
      <div className="absolute text-[#FFFDF5] top-[40%] marcellus left-1/2 -translate-x-1/2">
        <h4 className="text-5xl whitespace-nowrap">
          Discover what your skin really needs
        </h4>

        <div className="mt-38 backdrop-blur-3xl text-4xl border rounded-full  text-center mx-70 py-3.5">
          <h4 className='cursor-pointer'>Take Quiz</h4>
        </div>
      </div>
    </div>
  )
}

export default Page1
