import React from 'react'

const Hero = () => {
    return (
        <div className='py-10 px-[5%] relative mt-[149px]'>
            <p className="text-center uppercase font-extrabold text-3xl tracking-tighter relative sm:text-5xl lg:text-8xl z-1 ">
                the world of <br />
                sports Memorabilia <br />
                changes today
            </p>
            <img src="https://res.cloudinary.com/dwwy3zuqg/image/upload/v1760495162/67f43ea0e57ab0d1411e8675_hockey-pads_ymh6de.png"
                alt="hero img"
                className='relative w-60 aspect-auto mx-auto z-10 -mt-6 sm:-mt-10 sm:w-80 lg:-mt-15 lg:w-130' />

            <div className="bg-white z-11 inline-block min-[475px]:p-3 min-[475px]:border-3 font-bold mt-10 min-[475px]:absolute min-[475px]:bottom-30 right-[5%] xl:right-[10%]">
                <span className="text-primary">UNRIVALED</span> believes in a world <br />
                where top-tier sports collection <br />
                brings you closer to the game.
            </div>


            <div className="grid grid-cols-2 absolute top-0 left-0 right-0 h-70 sm:h-120 lg:h-150 xl:h-180">
                <div className="border-r border-b border-gray-400"></div>
                <div className="border-b border-gray-400"></div>
                <div className="border-r border-gray-400"></div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-70 flex justify-center sm:h-120 lg:h-150 xl:h-180">
                <div className="h-full w-70 sm:w-120 lg:w-150 xl:w-180 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="rounded-full border border-gray-400 h-50 w-50 sm:h-80 sm:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero