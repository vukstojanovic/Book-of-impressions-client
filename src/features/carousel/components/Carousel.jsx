import { useReducer } from 'react'
// import Swiper core and required modules
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Carousel.module.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import { RatingStars } from '@/components/RatingStars'
import { NavArrow } from '@/assets/SvgSprite'

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_input':
      return { ...state, [action.key]: action.payload }
    default:
      return state
  }
}

export const Carousel = () => {
  const [state, dispatch] = useReducer(reducer)
  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      slidesPerView={1}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      pagination={{
        type: 'bullets',
        el: '.pagination',
        clickable: true,
      }}
      centeredSlides={true}
      setWrapperSize
      style={{ overflow: 'unset', minHeight: '300px' }}
    >
      <SwiperSlide className="pb-12 next">
        <div className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20">
          <div>
            <p>Question Type 1</p>
            <RatingStars />
          </div>

          <input
            onChange={(e) =>
              dispatch({ type: 'update_input', payload: e.target.value, key: e.target.name })
            }
            type="text"
            name="slide1"
            id="slide1"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-3 px-1"
            placeholder="Enter text here"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-12 items-center">
        <div className="shadow-box rounded-lg grid justify-center p-4">
          <form action="" className="space-y-2">
            <p>Enter your details</p>
            <input
              type="text"
              placeholder="Name and surname"
              className="bg-[#f5f5f5] rounded-sm pl-2 bg-none outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#f5f5f5] rounded-sm pl-2 bg-none outline-none"
            />
            <label className="items-center flex">
              <input type="checkbox" className="mr-1 mt-1" />
              contact me
            </label>
          </form>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-12">
        <div className="shadow-box flex-col flex space-y-3 justify-center pt-9 pb-16 px-6 rounded-md">
          <div className="px-3">
            <p className="font-medium">Lorem Title</p>
            <p>Lorem text</p>
          </div>
          <div className="flex space-x-3 w-full">
            <button className="rounded-md w-full bg-btnGoBack p-2 text-textGray">Go Back</button>
            <button className="rounded-md w-full bg-btnConfirm p-2 text-white font-bold">
              Confirm
            </button>
          </div>
        </div>
      </SwiperSlide>
      <div className={`flex items-center justify-center space-x-2`}>
        <button
          className={`button-prev w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 rotate-180 disabled:opacity-50`}
        >
          <NavArrow />
        </button>
        <div className={`pagination`} id={styles.bulletWrapper}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button
          className={`button-next w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 disabled:opacity-50`}
        >
          <NavArrow />
        </button>
      </div>
    </Swiper>
  )
}
