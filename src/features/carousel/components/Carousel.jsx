import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import { NavArrow } from '@/assets/SvgSprite'
import { QuestionForm } from '@/components/QuestionForm'

export const Carousel = () => {
  const form1 = {
    type: 'short',
    question: 'This is form with only 1 question',
  }
  const form2 = {
    type: 'long',
    questions: [
      '1.This is form with 3 questions',
      '2.This is form with 3 questions',
      '3.This is form with 3 questions',
    ],
  }
  const form3 = {
    type: 'yes/no',
    questions: ['Yes', 'No'],
  }
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
      }}
      centeredSlides={true}
      setWrapperSize
      style={{ overflow: 'unset', marginTop: '68px' }}
    >
      <SwiperSlide className="pb-6">
        <QuestionForm form={form1} />
      </SwiperSlide>
      <SwiperSlide className="pb-6">
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
      <SwiperSlide className="pb-6">
        <div className="shadow-box flex-col flex space-y-3 justify-center pt-9 pb-16 px-6 rounded-md">
          <div className="px-3">
            <p className="font-medium">Lorem Title</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, provident?</p>
          </div>
          <div className="flex space-x-3 w-full">
            <button className="rounded-md w-full bg-neutral-100 p-2 text-textGray">Go Back</button>
            <button className="rounded-md w-full bg-boiOrange p-2 text-white font-bold">
              Confirm
            </button>
          </div>
        </div>
      </SwiperSlide>

      <div className="flex items-center justify-center space-x-2">
        <button className="button-prev w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 rotate-180 hover:opacity-90 disabled:opacity-50">
          <NavArrow />
        </button>

        <div className="pagination" id={styles.bulletWrapper}></div>

        <button className="button-next w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 hover:opacity-90 disabled:opacity-50">
          <NavArrow />
        </button>
      </div>
    </Swiper>
  )
}
