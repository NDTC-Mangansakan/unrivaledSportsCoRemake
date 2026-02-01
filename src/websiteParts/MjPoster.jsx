import React from 'react'

const MjPoster = () => {
    return (
        <div className='my-10 relative overflow-hidden'>
            <img src="https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760517522/67eeb2a5b3aacbc87fa5b898_Graphic_20Hunters_20Wallpaper_201_201-min_pwcfdf.jpg"
                alt="mj poster" className='w-full aspect-auto' />

            <div className="flex justify-between items-center absolute top-10 left-0 right-0 px-[2%] text-white">
                <span className="font-extrabold text-6xl sm:text-7xl lg:text-7xl xl:text-9xl">First</span>
                <span className="font-light italic text-6xl sm:text-7xl lg:text-7xl xl:text-9xl">Class</span>
            </div>

            <div className="text-center absolute bottom-10 left-0 right-0 text-5xl font-extrabold sm:text-7xl lg:text-8xl xl:text-9xl text-white">
                Collectibles
            </div>

            <div className="grid grid-cols-2 absolute inset-0">
                <div className="border-r border-b border-gray-200"></div>
                <div className="border-b border-gray-200"></div>
                <div className="border-r border-gray-200"></div>
            </div>

            <div className="h-40 w-40 sm:h-50 sm:w-50 lg:h-70 lg:w-70 xl:h-100 xl:w-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200"></div>

            <div className="h-40 w-40 sm:h-50 sm:w-50 lg:h-70 lg:w-70 xl:h-100 xl:w-100 rounded-full border border-gray-200 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="h-40 w-40 sm:h-50 sm:w-50 lg:h-70 lg:w-70 xl:h-100 xl:w-100 rounded-full border border-gray-200 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>

        </div>
    )
}

export default MjPoster