import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[34vh] flex justify-center items-center pt-14 marcellus'>
        <div className="">
            <div className="top flex justify-between items-center">
                <div className="text-[40px] py-4 border-r pr-6">NUBHÉ</div>
                <div className="flex flex-col ml-6">
                    <div className="cursor-pointer">FAQ</div>
                    <div className="cursor-pointer">Support Chat</div>
                </div>
            </div>
            <div className="bottom mt-6.5 ml-8 flex justify-center items-center gap-4">
                    <img className='size-4.25 cursor-pointer' src="src/assets/Footer/Instagram.svg" alt="Instagram" />
                    <img className='size-4.25 cursor-pointer' src="src/assets/Footer/Youtube.svg" alt="Instagram" />
                    <img className='size-4.25 cursor-pointer' src="src/assets/Footer/LinkedIn.svg" alt="Instagram" />
                    <img className='size-4.25 cursor-pointer' src="src/assets/Footer/X.svg" alt="Instagram" />
            </div>
        </div>
    </div>
  )
}

export default Footer