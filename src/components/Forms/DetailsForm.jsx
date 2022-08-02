import { useSwiper } from 'swiper/react'
import { useTranslations } from 'use-intl'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFormStore } from '@/zustand/store'

export const DetailsForm = () => {
  const swiper = useSwiper()
  const t = useTranslations('Form')
  const formData = useFormStore((state) => state.formData)
  const setFormData = useFormStore((state) => state.setFormData)
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format'),
  })
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      contactMe: formData.contactMe,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  })

  useEffect(() => {
    const subscription = watch((data) => {
      setFormData({ name: data.name.trim(), email: data.email.trim(), ...data })
    })

    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    console.log(errors.email)
  }, [errors.email])

  return (
    <div
      className="shadow-box rounded-lg grid justify-center px-5 py-9 space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
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
        <p className="px-4 text-sm">{errors.email && errors.email.message}&nbsp;</p>
        <label className="items-center flex pl-3">
          <input
            type="checkbox"
            name="contact-me"
            className="mr-1 mt-1 w-[18px] h-[18px] tracking-[.65px]"
            {...register('contactMe')}
            disabled={!formData.name && (!formData.email || errors.email)}
          />
          {t('contactMe')}
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  )
}
