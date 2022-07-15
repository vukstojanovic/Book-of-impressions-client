import { useReducer, useState } from 'react'
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
import { IconCaret } from '@/assets/SvgSprite'

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_input':
      return { ...state, [action.key]: action.payload }
    default:
      return state
  }
}

export const Carousel = ({ children }) => {
  const [state, dispatch] = useReducer(reducer)

  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      keyboard={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      className={styles.swiper}
      wrapperTag="div"
      setWrapperSize
    >
      <SwiperSlide className={styles.wrapper}>
        <div className="shadow-box grid rounded-lg justify-center w-full p-4">
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
      <SwiperSlide className={styles.wrapper}>
        <div className="shadow-box rounded-lg grid justify-center p-4">
          <div>
            <p>Question Type 1</p>
            <RatingStars />
          </div>
          <div>
            <p>Question Type 2</p>
            <RatingStars />
          </div>

          <div>
            <p>Question Type 3</p>
            <RatingStars />
          </div>
          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: 'update_input', payload: e.target.value, key: e.target.name })
            }
            name="slide2"
            id="slide2"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-3 px-1"
            placeholder="Enter text here"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.wrapper}>
        <div className="shadow-box flex rounded-lg space-x-5 justify-center m-4 p-4">
          <button className="bg-red-700 p-2">Cancel</button>
          <button className="bg-green-700 p-2">Confirm</button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
