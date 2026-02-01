import React from 'react'

const Contact = () => {
    return (
        <div id='join-the-list' className='py-10 px-[10%]'>
            <div className="border-b border-gray-400 pb-10 text-center">
                <p className='sm:text-xl'>
                    <span className="font-bold">The</span>
                    <span className="font-light">Players</span>
                    <span className="font-bold text-primary">Club</span>
                </p>
                <p className="mt-3 sm:mt-5 text-3xl font-extrabold tracking-tighter sm:text-5xl lg:text-7xl xl:text-8xl">
                    CAN WE HAVE <br /><span className="text-primary">YOUR</span> AUTOGRAPH ?
                </p>
            </div>

            <div className="py-10 max-w-[1024px] mx-auto">
                <grid className="grid grid-cols-2 gap-5">
                    <input type="text" className='outline-none bg-gray-300 py-3 px-5 sm:py-5' placeholder='First Name' />
                    <input type="text" className='outline-none bg-gray-300 py-3 px-5 sm:py-5' placeholder='Last Name' />
                    <input type="text" className='outline-none bg-gray-300 py-3 px-5 col-span-2 sm:col-span-1 sm:py-5' placeholder='Email Adress' />
                    <input type="text" className='outline-none bg-gray-300 py-3 px-5 col-span-2 sm:col-span-1 sm:py-5' placeholder='Phone Number' />

                    <button className="col-span-2 bg-primary py-3 text-center font-bold text-white text-xl sm:py-5">Join</button>
                </grid>
            </div>
        </div>
    )
}

export default Contact