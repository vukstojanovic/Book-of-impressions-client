import { useTranslations } from 'next-intl'
import { useSwiper } from 'swiper/react'

export const ConfirmSubmit = () => {
  const swiper = useSwiper()
  const t = useTranslations('Form')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="shadow-box flex-col flex space-y-8 justify-center pt-9 pb-16 px-6 rounded-md"
    >
      <div className="px-3 space-y-3">
        <p>Lorem Title</p>
        <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex space-x-3 w-full">
        <button
          onClick={() => swiper.slidePrev()}
          className="rounded-md w-full bg-btnGoBack px-6 py-3 text-textGray leading-7 tracking-[.65px]"
        >
          {t('goBack')}
        </button>
        <button
          type="submit"
          className="rounded-md w-full bg-btnConfirm px-7 py-3 text-white font-bold leading-7 tracking-[.65px]"
        >
          {t('confirm')}
        </button>
      </div>
    </form>
  )
}
