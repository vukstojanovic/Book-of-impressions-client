import { useSwiper } from 'swiper/react'
import { useTranslations } from 'use-intl'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useFormStore } from '@/zustand/store'

export const DetailsForm = () => {
  const swiper = useSwiper()
  const t = useTranslations('Form')
  const formData = useFormStore((state) => state.formData)
  const setFormData = useFormStore((state) => state.setFormData)
  const { register, watch } = useForm({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      contactMe: formData.contactMe,
    },
  })

  useEffect(() => {
    const subscription = watch((data) => {
      setFormData({ name: data.name.trim(), email: data.email.trim(), ...data })
    })

    return () => subscription.unsubscribe()
  }, [watch])

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
          {...register('name')}
        />
        <input
          type="text"
          name="email"
          placeholder={t('emailPlaceholder')}
          className="bg-[#f5f5f5] rounded-md p-[11px] bg-none outline-none tracking-[.65px]"
          {...register('email')}
        />
        <label className="items-center flex pl-3">
          <input
            type="checkbox"
            name="contact-me"
            className="mr-1 mt-1 w-[18px] h-[18px] tracking-[.65px]"
            {...register('contactMe')}
            disabled={!formData.name && !formData.email}
          />
          {t('contactMe')}
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  )
}
