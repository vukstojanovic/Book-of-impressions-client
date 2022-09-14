import { useTranslations } from 'use-intl'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useFormStore } from '@/stores/form'

export const DetailsForm = () => {
  const t = useTranslations('Form')
  const formData = useFormStore((state) => state.formData)
  const setFormData = useFormStore((state) => state.setFormData)
  const setEmailError = useFormStore((state) => state.setEmailError)
  const validationSchema = yup.object().shape({
    reviewEmail: yup.string().email('Invalid email format'),
  })
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      reviewName: formData.reviewName,
      reviewEmail: formData.reviewEmail,
      contact: formData.contact,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  })

  useEffect(() => {
    const subscription = watch((data) => {
      setFormData({
        reviewName: data.reviewName.trim(),
        reviewEmail: data.reviewEmail.trim(),
        ...data,
      })
    })

    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    if (!formData.reviewEmail || errors.reviewEmail) setValue('contact', false)
    setEmailError(errors.reviewEmail)
  }, [formData.reviewEmail, errors.reviewEmail])

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
          name="reviewName"
          placeholder={t('namePlaceholder')}
          className="bg-[#f5f5f5] rounded-md p-[11px] bg-none outline-none tracking-[.65px] border-[1px] focus:border-[#ff6900]"
          {...register('reviewName')}
        />
        <input
          type="text"
          name="reviewEmail"
          placeholder={t('emailPlaceholder')}
          className="bg-[#f5f5f5] rounded-md p-[11px] bg-none outline-none tracking-[.65px] border-[1px] focus:border-[#ff6900]"
          {...register('reviewEmail')}
        />
        <p className="px-4 text-sm">{errors.reviewEmail && errors.reviewEmail.message}&nbsp;</p>
        <label className="items-center flex pl-3">
          <input
            type="checkbox"
            name="contact-me"
            className="mr-1 mt-1 w-[18px] h-[18px] tracking-[.65px]"
            {...register('contact')}
            disabled={!formData.reviewEmail || errors.reviewEmail}
          />
          {t('contactMe')}
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  )
}
