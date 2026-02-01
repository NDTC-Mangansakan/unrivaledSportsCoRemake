import React from 'react'

const Footer = () => {
  return (
    <div className='pt-30 lg:px-[5%] pb-10 lg:pb-0 border-t border-gray-400 flex flex-col gap-10 lg:flex-row lg:justify-between relative overflow-hidden'>

      <div className="flex flex-col px-[5%] lg:px-0 lg:justify-between lg:w-1/4">
        <div className='space-y-3'>
          <p className="text-primary font-light text-xl sm:text-2xl">Our Address</p>
          <p className="font-semibold underline text-lg">
            159-161 Larchmont Ave <br />
            Larchmont New York 10538
          </p>
        </div>
        <p className="font-semibold text-lg lg:pb-5">Autographs, Jersey, Trading Cards, Memorabilia</p>
      </div>

      <div className="lg:w-2/4">
        <img src="https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760531342/67f43b65bc251e91dca7bb79_unrivaled-footer_mxhghl.png" alt="footer img" className='w-full aspect-auto relative z-1' />
      </div>

      <div className="flex flex-col px-[5%] lg:px-0 lg:justify-between lg:w-1/4">
        <p className="mt-3 font-semibold underline sm:text-lg">
          shaqerzz.prog@gmail.com
        </p>
        <p className="mt-3 text-xs font-light lg:pb-5">
          2025 © copyright Unrivaled Sports - All Rights Reserved
        </p>
      </div>

      <div className="h-200 w-200 rounded-full border border-gray-400 absolute top-0 left-1/2 -translate-x-1/2"></div>

      <div className="h-200 w-full grid grid-cols-2 absolute top-0 left-0 right-0">
        <div className="border-r border-gray-400 border-b"></div>
        <div className="border-b border-gray-400"></div>
        <div className="border-l border-gray-400"></div>
      </div>
    </div>
  )
}

export default Footer