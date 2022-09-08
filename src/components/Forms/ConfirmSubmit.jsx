import { useTranslations } from 'next-intl'
import { useSwiper } from 'swiper/react'
import { getCookie } from 'cookies-next'

import { useFormStore } from '@/stores/form'
import { usePostReview } from '@/hooks/forms/usePostReview' // import { useFormData } from '@/hooks/forms/useGetFormData'

export const ConfirmSubmit = ({ formType }) => {
  const swiper = useSwiper()
  const t = useTranslations('Form')

  const setIsLoading = useFormStore((state) => state.setIsLoading)
  const setIsSuccess = useFormStore((state) => state.setIsSuccess)
  const resetFormData = useFormStore((state) => state.resetFormData)
  const formData = useFormStore((state) => state.formData)

  const mutateReview = usePostReview({
    id: formData.formId,
    setIsLoading,
    setIsSuccess,
    resetFormData,
    formType,
  })

  const sessionIdAnswer = getCookie('sessionIdAnswer')
  const sessionIdRating = getCookie('sessionIdRating')
  const sessionIdRatings = getCookie('sessionIdRatings')

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

          let currentFormSessionId

          if (!sessionIdAnswer || !sessionIdRating || !sessionIdRatings) {
            currentFormSessionId = null
          }
          if (formType === 'Answer' && sessionIdAnswer) {
            currentFormSessionId = [sessionIdAnswer]
          }
          if (formType === 'Rating' && sessionIdRating) {
            currentFormSessionId = [sessionIdRating]
          }
          if (formType === 'Ratings' && sessionIdRatings) {
            currentFormSessionId = [sessionIdRatings]
          }

          mutateReview.mutate({
            data: { ...formData, sessionIds: currentFormSessionId },
          })
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
