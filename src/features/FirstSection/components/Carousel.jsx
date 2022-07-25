import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/keyboard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Keyboard } from 'swiper'
import { useRef } from 'react'
import Image from 'next/image'

export const Carousel = ({ imgList }) => {
  const swiperPrev = useRef(null)
  const swiperNext = useRef(null)

  return (
    <Swiper
      modules={[Navigation, EffectFade, Keyboard]}
      navigation={{
        nextEl: swiperNext.current,
        prevEl: swiperPrev.current,
      }}
      effect="fade"
      speed={800}
      slidesPerView={1}
      loop
      style={{ overflow: 'unset' }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperPrev.current
        swiper.params.navigation.nextEl = swiperNext.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
    >
      {imgList.map((img) => (
        <SwiperSlide key={img}>
          <div className="w-fill">
            <Image src={img} alt={img} width="100%" height={70} layout="responsive" priority />
          </div>
        </SwiperSlide>
      ))}
      <div
        className="prev bg-boiLightBlue p-4 rounded-md w-fit cursor-pointer absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2"
        ref={swiperPrev}
      >
        <img src="/img/RectangleLeft.png" alt="rectnagle-left" />
      </div>
      <div
        className="next bg-boiLightBlue p-4  rounded-md w-fit cursor-pointer absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2"
        ref={swiperNext}
      >
        <img src="/img/RectangleRight.png" alt="rectnagle-right" />
      </div>
    </Swiper>
  )
}
