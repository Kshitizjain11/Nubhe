import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import Moroccan from '../../assets/Page3/Moroccan.svg'
import Water from '../../assets/Page3/Water.svg'
import Glycerin from '../../assets/Page3/Glycerin.svg'
import Korean from '../../assets/Page3/Korean.svg'

// Article thumbnails
import lemonade from '../../assets/Page3/lemonade.png'
import glycerinImg from '../../assets/Page3/glycerin.png'
import serums from '../../assets/Page3/serums.png'

const Page3 = () => {
    const coverImages = {
  Moroccan,
  Water,
  Glycerin,
  Korean,
}
  const [coverImg, setCoverImg] = useState("Moroccan")

  const handleCoverImg = (text) => {
    setCoverImg(text)
  }

  const MouseOverCoverImg = () => {
    setCoverImg("Moroccan")
  }

  return (
    <div className="h-screen w-full flex justify-between pt-20 mb-10">
      {/* LEFT COVER IMAGE */}
      <div className="w-[50%] transition-all ease-out">
        <img
          className="ml-24"
          src={coverImages[coverImg]}
          alt={coverImg}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex gap-4 flex-col px-10">

        {/* ITEM 1 */}
        <div
          onMouseOver={() => handleCoverImg("Water")}
          onMouseLeave={MouseOverCoverImg}
          className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4"
        >
          <div className="img w-[60%]">
            <img src={lemonade} alt="Water" />
          </div>

          <div className="flex flex-col my-2 w-full justify-between items-start">
            <h4 className="marcellus whitespace-nowrap text-lg leading-5">
              Drink Your Glow: The <br />
              Importance of Water Intake <br />
              for Healthy, Radiant Skin
            </h4>

            <div className="flex gap-3 mb-2 items-center">
              <h6 className="text-[#626262] pt-serif-regular-italic">
                By Saumya Jain
              </h6>
              <h6 className="inter rounded-3xl text-[#FFFDF5] px-2 py-1 text-sm bg-[#A45832]">
                4 min read
              </h6>
            </div>
          </div>
        </div>

        <div className="h-px mt-2 w-[82%] bg-[#929292]" />

        {/* ITEM 2 */}
        <div
          onMouseOver={() => handleCoverImg("Glycerin")}
          onMouseLeave={MouseOverCoverImg}
          className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4"
        >
          <div className="img w-[60%]">
            <img src={glycerinImg} alt="Glycerin" />
          </div>

          <div className="flex flex-col my-2 w-full justify-between items-start">
            <h4 className="marcellus whitespace-nowrap text-lg leading-5">
              Glycerin: The Most <br />
              Underrated Skincare <br />
              Ingredient You Need to Know
            </h4>

            <div className="flex gap-3 mb-2 items-center">
              <h6 className="text-[#626262] pt-serif-regular-italic">
                By Saumya Jain
              </h6>
              <h6 className="inter rounded-3xl text-[#FFFDF5] px-2 py-1 text-sm bg-[#A45832]">
                4 min read
              </h6>
            </div>
          </div>
        </div>

        <div className="h-px mt-2 w-[82%] bg-[#929292]" />

        {/* ITEM 3 */}
        <div
          onMouseOver={() => handleCoverImg("Korean")}
          onMouseLeave={MouseOverCoverImg}
          className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4"
        >
          <div className="img w-[60%]">
            <img src={serums} alt="Korean" />
          </div>

          <div className="flex flex-col my-2 w-full justify-between items-start">
            <h4 className="marcellus whitespace-nowrap text-lg leading-5">
              The Glow Beyond Borders: <br />
              Korean Skincare & Nubhe’s <br />
              Ingredient Wisdom
            </h4>

            <div className="flex gap-3 mb-2 items-center">
              <h6 className="text-[#626262] pt-serif-regular-italic">
                By Saumya Jain
              </h6>
              <h6 className="inter rounded-3xl text-[#FFFDF5] px-2 py-1 text-sm bg-[#A45832]">
                4 min read
              </h6>
            </div>
          </div>
        </div>

        <div className="h-px mt-2 w-[82%] bg-[#929292]" />

        {/* READ ALL */}
        <div className="mt-[25px] justify-end pr-18 flex items-center gap-[5px] cursor-pointer">
          <span className="text-[20px] marcellus">Read All</span>
          <IoIosArrowForward className="text-[20px]" />
        </div>

      </div>
    </div>
  )
}

export default Page3
