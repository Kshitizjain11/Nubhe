import React from 'react'
import acc from "../assets/page1/account_circle.svg"
import ri_question from '../assets/page1/ri_question-fill.svg'

const Navbar = () => {
  return (
    <div className='w-full h-16 fixed top-0 flex justify-between px-20 items-center marcellus  border-b'>
        <div className="text-[40px]">NUBHÉ</div>
        <div className="flex gap-7">
            <div className="">About</div>
            <div className="">Blogs</div>
            <div className="">Fact Check</div>
            <div className="">Podcast</div>
        </div>
        <div className="flex gap-2 items-center">
            <div className="">
                <img className='size-7' src={ri_question} alt="Quiz" />
            </div>
            <div className="">
                <img className='size-6' src={acc} alt="Account" />
            </div>
        </div>
    </div>
  )
}

export default Navbar