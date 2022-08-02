import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useFormData } from '@/features/carousel'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import { NavArrow } from '@/assets/SvgSprite'
import { DetailsForm, QuestionForm, ConfirmSubmit } from '@/components/Forms'

export const Carousel = (id) => {
  const { data } = useFormData(id)
  console.log(data)
  // const { type } = data
  const type = { type: 'short' }
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
      <SwiperSlide>{({ isActive }) => isActive && <QuestionForm form={type} />}</SwiperSlide>
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
