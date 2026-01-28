import React from 'react'
import acc from "../assets/page1/account_circle.svg"
import ri_question from '../assets/page1/ri_question-fill.svg'

const Navbar = () => {
  return (
    <div className='w-full bg-[#FFFDF5] z-10 h-16 fixed top-0 flex justify-between px-20 items-center marcellus  border-b'>
        <div className="text-[40px] cursor-pointer">NUBHÉ</div>
        <div className="flex gap-7">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Blogs</div>
            <div className="cursor-pointer">Fact Check</div>
            <div className="cursor-pointer">Podcast</div>
        </div>
        <div className="flex gap-2 items-center">
            <div className="cursor-pointer">
                <img className='size-7' src={ri_question} alt="Quiz" />
            </div>
            <div className="cursor-pointer">
                <img className='size-6' src={acc} alt="Account" />
            </div>
        </div>
    </div>
  )
}

export default Navbar