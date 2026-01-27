import React, { useState } from 'react'
const Page3 = () => {
    const [coverImg, setCoverImg] = useState("Moroccan")
    const handleCoverImg = (text)=>{
        setCoverImg(text)
    }
    const MouseOverCoverImg = ()=>{
        setCoverImg("Moroccan")
    }

    return (
        <div className='h-screen w-full flex justify-between items-center '>
            <div className="w-[50%] transition-all  ease-out">
                <img className=' ml-26' src={`src/assets/Page3/${coverImg}.svg`} alt={coverImg} />
            </div>
            <div className="px-20 flex gap-4 flex-col ">
                <div onMouseOver={()=>handleCoverImg("Water")} onMouseLeave={MouseOverCoverImg} className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4">
                    <div className="img w-[65%] h-full">
                        <img className='' src="src/assets/Page3/lemonade.png" alt="Water" />
                    </div>
                    <div className="flex flex-col my-2 w-full justify-between items-start">
                        <h4 className='marcellus whitespace-nowrap text-xl'>Drink Your Glow: The <br/> Importance of Water Intake<br/>for Healthy, Radiant Skin</h4>
                        <div className="flex gap-2  items-center">
                            <h6 className='text-[#626262]'>By Saumya Jain</h6>
                            <h6 className='inter rounded-3xl text-[#FFFDF5] px-3 py-1 bg-[#A45832]'>4 min read</h6>
                        </div>
                    </div>
                </div>
                <div className="h-px mt-2 w-full bg-[#929292]"></div>
                <div onMouseOver={()=>handleCoverImg("Glycerin")} onMouseLeave={MouseOverCoverImg} className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4">
                    <div className="img w-[65%] h-full">
                        <img className='' src="src/assets/Page3/glycerin.png" alt="Water" />
                    </div>
                    <div className="flex flex-col my-2 w-full justify-between items-start">
                        <h4 className='marcellus whitespace-nowrap text-xl'>Glycerin: The Most<br/> Underrated Skincare <br/> Ingredient You Need to Know</h4>
                        <div className="flex gap-2  items-center">
                            <h6 className='text-[#626262]'>By Saumya Jain</h6>
                            <h6 className='inter rounded-3xl text-[#FFFDF5] px-3 py-1 bg-[#A45832]'>4 min read</h6>
                        </div>
                    </div>
                </div>
                <div className="h-px mt-2 w-full bg-[#929292]"></div>
                <div onMouseOver={()=>handleCoverImg("Korean")} onMouseLeave={MouseOverCoverImg} className="flex justify-around hover:scale-105 transition-all duration-300 ease-in-out gap-4">
                    <div className="img w-[65%] h-full">
                        <img className='' src="src/assets/Page3/serums.png" alt="Water" />
                    </div>
                    <div className="flex flex-col my-2 w-full justify-between items-start">
                        <h4 className='marcellus whitespace-nowrap text-xl'>The Glow Beyond Borders:<br/> Korean Skincare & Nubhe’s<br/>Ingredient Wisdom</h4>
                        <div className="flex gap-2  items-center">
                            <h6 className='text-[#626262]'>By Saumya Jain</h6>
                            <h6 className='inter rounded-3xl text-[#FFFDF5] px-3 py-1 bg-[#A45832]'>4 min read</h6>
                        </div>
                    </div>
                </div>
                <div className="h-px mt-2 w-full bg-[#929292]"></div>
            </div>
        </div>
    )
}

export default Page3