


const theGoodsData = [
    {
        title: 'Autographs',
        desc: 'Our exclusive collection features authenticated, signed memorabilia from legendary athletes across all major sports, each piece carefully selected for its historical significance and investment potential.',
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760516141/67eea3b42e799f41768e47ac_3_ibh9qc.jpg',
        id:'autographs'
    },
    {
        title: 'Jerseys',
        desc: 'Game-worn and authentic replica jerseys from iconic players across all major sports, featuring rare vintage editions and championship-season collectibles that showcase the evolution of team designs.',
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760516144/67eea3b4635b4a4922263d22_4_spg4em.jpg',
        id:'jerseys'
    },
    {
        title: 'Trading Cards',
        desc: 'From vintage rookies to modern limited editions, our professionally graded collection features sought-after cards spanning decades of sports history, with PSA and BGS authenticated rarities for collectors of all levels.',
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760516152/67eea3b48be8d8b535af5637_2_squewq.jpg',
        id:'trading-cards'
    },
    {
        title: 'Memorabilia',
        desc: 'Our diverse collection spans championship flags, game-used equipment, and limited-edition commemorative items from historic sporting moments, each piece authenticated with certificates of authenticity and display-ready presentation.',
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760516154/67eea3b4635b4a4922263d15_1_d5qpju.jpg',
        id: 'memorabilia'
    },
]

const TheGoodsPart = () => {
    return (
        <div className='py-10 px-[10%]'>
            <p className="text-4xl font-extrabold pb-3 border-b border-gray-200 sm:text-5xl lg:text-7xl xl:text-8xl tracking-tighter">
                THE <br className="hidden sm:block lg:hidden" /> GOODS
            </p>

            <div className="mt-5">
                {theGoodsData.map((data, i) => (
                    <div key={data.id} id={data.id} className="flex flex-col lg:flex-row py-5 border-b border-gray-400">
                        <div className="pb-5 lg:pb-0 lg:w-3/4 lg:flex gap-20">
                            <p className="text-primary font-bold text-xl sm:text-2xl">{++i}</p>
                            <p className="font-semibold text-3xl mt-3 sm:text-4xl lg:mt-0">{data.title}</p>
                            <p className="mt-3 sm:text-lg lg:mt-0">{data.desc}</p>
                        </div>

                        <div className="lg:pl-10 lg:w-1/4">
                            <img src={data.img} alt={data.title} className="w-full aspect-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TheGoodsPart