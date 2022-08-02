import { useTranslations } from 'next-intl'
import { useSwiper } from 'swiper/react'
import { useFormStore } from '@/zustand/store'

export const ConfirmSubmit = () => {
  const swiper = useSwiper()
  const t = useTranslations('Form')
  const setIsLoading = useFormStore((state) => state.setIsLoading)

  return (
    <div className="shadow-box flex-col flex space-y-8 justify-center pt-9 pb-16 px-6 rounded-md">
      <div className="px-3 space-y-3">
        <p>Lorem Title</p>
        <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <form
        className="flex space-x-3 w-full"
        onSubmit={(e) => {
          e.preventDefault()
          setIsLoading(true)
        }}
      >
        <button
          type="button"
          onClick={() => swiper.slidePrev()}
          className="rounded-md w-full bg-neutral-100 px-6 py-3 text-textGray leading-7 tracking-[.65px]"
        >
          {t('goBack')}
        </button>
        <input
          type="submit"
          className="rounded-md w-full bg-boiOrange px-7 py-3 text-white font-bold leading-7 tracking-[.65px] cursor-pointer"
          value={t('confirm')}
        />
      </form>
    </div>
  )
}
