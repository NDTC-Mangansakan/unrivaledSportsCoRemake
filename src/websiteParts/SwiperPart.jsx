import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"


import "swiper/css"
import { useEffect, useState } from "react"
import { RiArrowLeftLongLine, RiArrowRightLongLine } from "@remixicon/react"

const swiperImgs = [
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502150/67f55c1f2f52f24b3de9dc98_9_itxxv0.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502167/67f55c1f134ca6082040e100_14_wlufgc.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502184/67f55c1f56ffdc13bb9c4380_5_qfzihi.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502209/67f55c1f984b693b6f23030c_8_z6bkey.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502223/67f55c1ffa9acc27ea29f74d_7_uvefbc.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502236/67f55c1f3eb76805e2feb0ef_11_ujhs7u.jpg",
  "https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760502241/67f55c1e41d30b45a03e1c25_4_lbkrmk.jpg",
]

const SwiperPart = () => {
  const [itemCount, setItemCount] = useState(window.innerWidth <= 640 ? 1 : 3)
  const [arrowSize, setArrowSize] = useState(window.innerWidth <= 640 ? 30 : 40)

  useEffect(() => {
    const handleResize = () => setItemCount(window.innerWidth <= 640 ? 1 : 3)
    const handleArrowSize = () => setArrowSize(window.innerWidth <= 640 ? 30: 40)


    window.addEventListener("resize", handleResize)
    window.addEventListener('resize', handleArrowSize)


    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", handleArrowSize)
    }

  }, [])

  return (
    <div className="my-10 sm:hidden lg:block relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={itemCount}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        className="relative"
      >
        {swiperImgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`swiper image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex sm:hidden bg-transparent backdrop-blur-xs w-full lg:w-1/3 absolute h-full top-0 z-1 left-1/2 -translate-x-1/2 lg:flex items-center justify-center">
          <p className="font-extrabold p-3 border-5 text-center text-3xl lg:text-4xl xl:text-5xl">
            ON DISPLAY</p>
      </div>

      {/* Navigation buttons (visible only on lg screens) */}
      <div className="sm:hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          className="swiper-prev p-3 border-3 cursor-pointer lg:p-5 border-r-0"
        >
          <RiArrowLeftLongLine size={30}/>
        </button>
        <button
          className="swiper-next p-3 border-3 cursor-pointer lg:p-5"
        >
          <RiArrowRightLongLine size={30}/>
        </button>
      </div>
    </div>
  )
}

export default SwiperPart
