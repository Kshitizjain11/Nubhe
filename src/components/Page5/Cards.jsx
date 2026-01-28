import React, { useRef, useEffect } from 'react'
import image1 from '../../assets/Page5/ekta.svg'
import image2 from '../../assets/Page5/utkarsh.svg'
import image3 from '../../assets/Page5/reyna.svg'
import image4 from '../../assets/Page5/4.svg'
import stars from '../../assets/Page5/stars.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import gsap from 'gsap'

const Cards = () => {
  const cardRefs = useRef([])

  // set initial position (hidden below)
  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (el) gsap.set(el, { y: '100%' })
    })
  }, [])

  const handleEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  }

  const handleLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      y: '100%',
      duration: 0.6,
      ease: 'power3.in',
    })
  }

  const data = [
    {
      name: "Ekta",
      image: image1,
      profession: "Student",
      para:
        "For years, I was told that 'glow' meant becoming fairer. Nubhe helped me unlearn that myth. Now, my ritual is about health and hydration, not changing my shade. My skin finally feels like it’s breathing.",
      bg: "#A45832",
    },
    {
      name: "Utkarsh Kale",
      image: image2,
      profession: "Creative Director",
      para:
        "I started as a listener of the podcast, but the products made me a believer. The 'Ayurvedic Secrets' episode changed how I look at my morning routine. No more guessing, just real results based on real truth.",
      bg: "#2E2A26",
    },
    {
      name: "Reyna",
      image: image3,
      profession: "Yoga & Wellness Instructor",
      para:
        "I appreciate the transparency. In a world of 10-step marketing gimmicks, Nubhe’s focus on Ayurvedic essentials is refreshing. It’s the first time a brand has actually lived up to the 'Fact Check' in their menu.",
      bg: "#A45832",
    },
    {
      name: "Jishan Kapoor",
      image: image4,
      profession: "Holistic Lifestyle Coach",
      para:
        "I appreciate the transparency. In a world of 10-step marketing gimmicks, Nubhe’s focus on Ayurvedic essentials is refreshing. It’s the first time a brand has actually lived up to the 'Fact Check' in their menu.",
      bg: "#2E2A26",
    },
  ]

  return (
    <div className="flex mt-[-10px]">
      <Swiper
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 12 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((data, ind) => (
          <SwiperSlide key={ind}>
            {/* HOVER AREA (IMPORTANT) */}
            <div
              className="relative h-[60vh] w-[25vw] overflow-hidden"
              onMouseEnter={() => handleEnter(ind)}
              onMouseLeave={() => handleLeave(ind)}
            >
              {/* IMAGE DIV — UNCHANGED */}
              <div className="relative">
                <img src={data.image} alt="" />
                <div className="absolute left-0 bottom-12 px-10 text-white">
                  <h2 className="marcellus text-[26px]">{data.name}</h2>
                  <h2 className="pt-serif-regular">{data.profession}</h2>
                </div>
              </div>

              {/* COLORED TEXT DIV — SLIDES UP */}
              <div
                ref={(el) => (cardRefs.current[ind] = el)}
                style={{ backgroundColor: data.bg }}
                className="absolute inset-0 rounded-[16px] text-white"
              >
                <div className="absolute -top-7 left-[50px] text-[120px] marcellus rotate-180">
                  “
                </div>

                <div className="absolute top-[50%] -translate-y-1/2 left-[50px]">
                  <img className="h-[20px]" src={stars} alt="" />
                  <p className="pt-serif-regular-italic w-[94%] pt-3">
                    {data.para}
                  </p>
                </div>

                <div className="absolute left-0 bottom-12 px-10">
                  <h2 className="marcellus text-[26px]">{data.name}</h2>
                  <h2 className="pt-serif-regular">{data.profession}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Cards
