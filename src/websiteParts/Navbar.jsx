import { ScrollSmoother } from "gsap/ScrollSmoother"

const navLinks = [
    { link: '#jerseys', text: 'Jerseys'},
    { link: '#trading-cards', text: 'Trading Cards' },
    { link: '#autographs', text: 'Autographs' },
    { link: '#memorabilia', text: 'Memorabilia' },
    { link: '#join-the-list', text: 'Join The List' },
]

const Navbar = () => {

    const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true
    })

    const handleSmoothNav = (link) => {
        smoother.scrollTo(link, true, 'top top')
    }

    return (
        <>
            {/* Banner */}
            <div className="py-5 text-center bg-[#e1ff01] sm:text-lg lg:text-xl">
                <span>Grand Opening:</span>
                <span className='font-bold '>Friday June 20th</span>
            </div>

            <nav className='py-5 sticky top-0 flex justify-between items-center bg-transparent backdrop-blur-sm px-[10%] border-b border-gray-200 z-99'>
                <div className="flex items-center gap-x-10">
                    {navLinks.map((link, i) => (
                        <button 
                            key={link.link}  
                            onClick={() => handleSmoothNav(link.link)}
                            className={`${i === navLinks.length - 1 && 'px-5 sm:px-10 py-2 rounded-full bg-[#e1ff01]'} ${i !== navLinks.length - 1 && 'hidden lg:inline'} cursor-pointer`}>
                            {link.text}
                        </button>
                    ))}
                </div>

                <img src="https://res.cloudinary.com/dwwy3zuqg/image/upload/v1760493991/67ee95f83f909b2883f67cf9_UnrivaledLogo_dudvym.svg" alt="logo" className="w-25 sm:w-30 lg:w-35 aspect-auto"/>
            </nav>
        </>
    )
}

export default Navbar