import React from 'react'
import image1 from '../../assets/page2/Rectangle 27.png'
import image2 from '../../assets/page2/Rectangle 27 (1).png'
import image3 from '../../assets/page2/Rectangle 27 (2).png'
import image4 from '../../assets/page2/fed92b5f6cb8a82c3dfa0cb14e2213709de9fee1.png'
import image5 from '../../assets/page2/8e1a9c1af0d15a83f9a5e95d4c5c6c81b1157289.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowForward } from "react-icons/io";



const Cards = () => {
  const data = [
    { 
      title:"card1",
      image:image1,
      myth:"Fair skin is better skin",
      truth:"Healthy skin comes in all shades.Focus on skin health, not color!",
      para:"This harmful myth promotes colorism and ignores the natural beauty of all Indian skin tones.",
      bg:"#F5F4DF",
     textColor:"#A45832",
      textParaColor:"#2C2C2C"
    },
    { 
      title:"card2",
      image:image2,
      myth:"“Natural means safe”",
      truth:"Always patch test and research ingredients, natural or not.",
      para:"Just because something is natural doesn't mean it's good for your skin. Poison ivy is natural too!",
      bg:"#C8B89E",
      textColor:"#2C2C2C",
      textParaColor:"#2C2C2C"
    },
    { 
      title:"card3",
      image:image3,
      myth:"“Expensive products work better",
      truth:"Focus on ingredients and your skin's response, not the price tag.!",
      para:"Price doesn't determine effectiveness. Many affordable products work better than luxury ones.",
      bg:"#9B7A5B",
      textColor:"#2C2C2C",
      textParaColor:"#2C2C2C"
    },
{ 
      title:"card4",
      image:image4,
      myth:"“Scrub daily for glowing skin”",
      truth:"Gentle exfoliation 1-2 times per week is enough for most people.",
      para:"Over-exfoliation damages your skin barrier and can cause more problems than it solves..",
      bg:"#6A4D3B",
      textColor:"#D9B99B",
      textParaColor:"#D9B99B"
    },
   { title:"card5",
      image:image5,
      myth:"“Toothpaste cures acne”",
      truth:" Use proper acne treatments with salicylic acid or benzoyl peroxide.",
      para:"Toothpaste can severely irritate and burn your skin, making acne worse.",
      bg:"#39221C",
      textColor:"#D9B99B",
      textParaColor:"#D9B99B"
    },
  ]

  return (
    <>
    <div className='flex mt-[-10px]  '>
      <Swiper 
      navigation={false} 
        breakpoints={{
          640: {slidesPerView: 1 ,spaceBetween:10},
          768: {slidesPerView: 2 ,spaceBetween:10},
          1024: {slidesPerView: 3 ,spaceBetween:12}
        }}
      modules={[Navigation]} 
      className="mySwiper">
      {data.map((data)=>(
        <SwiperSlide key={data.title} >
          <div style={{ backgroundColor: data.bg, color: data.textColor}}
        className='rounded-[26.45px] mt-[60px]  max-w-[376px] h-[420px] overflow-hidden'>
         <div className='rounded-t-[26.45px] '>
           <img className='w-full h-[100px] object-cover object-center rounded-t-[26.45px]' src={data.image} alt="" />
         </div>

          <div className='p-[10px]'>
            <div className='ml-[30px] mt-[20px]' style={{ color: data.textColor }}>
              <h1 className='text-[19px] font-[PT Serif] italic' >Myth</h1>
            <p className='text-[19px] font-[Marcellus] '>{data.myth}</p>
            </div>
           <div className='ml-[30px] mt-[30px]' style={{ color: data.textColor }}>
             <h1 className='text-[19px] font-[PT Serif]  italic'>Truth</h1>
            <p  className='text-[19px] font-[Marcellus]  '>{data.truth}</p>
            </div>

            <div className='mt-[30px] text-center ' style={{ color: data.textParaColor }}>
              <p  className='text-[16.8px] font-[Marcellus] '>{data.para}</p>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
    <div className='mt-[25px] flex items-center gap-[5px] cursor-pointer'>
      <span className='text-[20px] font-[Marcellus] '>Read All </span>
      <IoIosArrowForward className='text-[20px] font-[Marcellus]' />
    </div>
</>
  )
}

export default Cards
