import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import { NavArrow } from '@/assets/SvgSprite'
import { DetailsForm, QuestionForm, ConfirmSubmit } from '@/components/Forms'

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
      <SwiperSlide>{({ isActive }) => isActive && <QuestionForm form={form2} />}</SwiperSlide>
      <SwiperSlide>{({ isActive }) => isActive && <DetailsForm />}</SwiperSlide>
      <SwiperSlide>{({ isActive }) => isActive && <ConfirmSubmit />}</SwiperSlide>

      <div className="flex items-center mt-6 justify-center space-x-2 [&>div.pagination]:w-auto">
        <button className="button-prev w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 rotate-180 hover:opacity-90 disabled:opacity-50">
          <NavArrow />
        </button>

        <div className="pagination space-x-3 [&>span]:w-[13px] [&>span]:h-[13px] [&>span]:pt-[2px] [&>span]:bg-[#46494b]"></div>

        <button className="button-next w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 hover:opacity-90 disabled:opacity-50">
          <NavArrow />
        </button>
      </div>
    </Swiper>
  )
}
