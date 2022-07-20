import { useSwiper } from 'swiper/react'
import { useTranslations } from 'use-intl'

export const DetailsForm = () => {
  const swiper = useSwiper()
  const t = useTranslations('Form')

  return (
    <div
      className="shadow-box rounded-lg grid justify-center px-5 py-9 space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        swiper.slideNext()
      }}
    >
      <p className="pl-3">{t('header')}</p>
      <form className="space-y-4 grid">
        <input
          type="text"
          name="name"
          placeholder={t('namePlaceholder')}
          className="bg-[#f5f5f5] rounded-md p-[11px] bg-none outline-none tracking-[.65px]"
        />
        <input
          type="text"
          name="email"
          placeholder={t('emailPlaceholder')}
          className="bg-[#f5f5f5] rounded-md p-[11px] bg-none outline-none tracking-[.65px]"
        />
        <label className="items-center flex pl-3">
          <input
            type="checkbox"
            name="contact-me"
            className="mr-1 mt-1 w-[18px] h-[18px] tracking-[.65px]"
          />
          {t('contactMe')}
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  )
}
