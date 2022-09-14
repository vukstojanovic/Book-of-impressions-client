import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'

import { NavArrow } from '@/assets/SvgSprite'
import { DetailsForm, QuestionForm, ConfirmSubmit } from '@/components/Forms'
import { useFormStore } from '@/stores/form'

export const Carousel = ({ form }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const formData = useFormStore((state) => state.formData)
  const emailError = useFormStore((state) => state.emailError)
  const isFirstNextAllowed = !!(formData.comment && formData.rating)
  const isSecondNextAllowed = !!(
    formData.comment &&
    formData.ratings &&
    !formData?.ratings?.includes(0)
  )
  const isThirdNextAllowed = Object.hasOwn(formData, 'answer')
  const allowsSliding = isFirstNextAllowed || isSecondNextAllowed || isThirdNextAllowed
  const allowsSlidingFirstPage = allowsSliding
  const allowsSlidingSecondPage = allowsSliding && !emailError
  const allowsSlidingClassFirst = allowsSlidingFirstPage
    ? ''
    : 'opacity-50 hover:opacity-50 pointer-events-none'
  const allowsSlidingClassSecond = allowsSlidingSecondPage
    ? ''
    : 'opacity-50 hover:opacity-50 pointer-events-none'

  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      allowSlideNext={currentIndex === 1 ? allowsSlidingSecondPage : allowsSlidingFirstPage}
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
      noSwipingClass="swiper-slide"
      style={{ overflow: 'unset', margin: '68px 10px 0' }}
      onSlideChange={(e) => setCurrentIndex(e.realIndex)}
    >
      <SwiperSlide>
        {({ isActive }) => isActive && form && <QuestionForm form={form} />}
      </SwiperSlide>
      <SwiperSlide>{({ isActive }) => isActive && <DetailsForm />}</SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && <ConfirmSubmit formType={form.type} />}
      </SwiperSlide>

      <div className={`flex items-center mt-6 justify-center space-x-2 [&>div.pagination]:w-auto`}>
        <button
          className={`button-prev w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 rotate-180 hover:opacity-90 disabled:opacity-50`}
        >
          <NavArrow />
        </button>

        <div
          className={`pagination space-x-3 [&>span]:w-[13px] [&>span]:h-[13px] [&>span]:pt-[2px] [&>span]:bg-[#46494b]`}
        ></div>

        <button
          className={`button-next w-8 h-8 bg-[#054a7b] rounded-full grid items-center justify-center pr-1 hover:opacity-90 disabled:opacity-50 ${
            currentIndex === 1 ? allowsSlidingClassSecond : allowsSlidingClassFirst
          }`}
        >
          <NavArrow />
        </button>
      </div>
    </Swiper>
  )
}
