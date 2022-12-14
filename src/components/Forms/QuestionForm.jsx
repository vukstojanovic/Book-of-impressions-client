import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { RatingStars } from '../RatingStars'

import QuestionText from './QuestionText'

import { ThumbsDown, ThumbsUp } from '@/assets/SvgSprite'
import { useFormStore } from '@/stores/form'

export const QuestionForm = ({ form }) => {
  const formData = useFormStore((state) => state.formData)
  const setFormData = useFormStore((state) => state.setFormData)

  const t = useTranslations('QuestionForm')

  const {
    register: registerShort,
    control: controlShort,
    watch: watchShort,
  } = useForm({ defaultValues: { comment: formData?.comment } })

  const {
    register: registerLong,
    control: controlLong,
    watch: watchLong,
  } = useForm({ defaultValues: { comment: formData?.comment } })

  const { register: registerYesNo, watch: watchYesNo } = useForm({
    defaultValues: { answer: String(formData?.answer) },
  })

  useEffect(() => {
    const subscription = watchShort((data) => {
      const modifiedData = { formId: form.id, comment: data.comment.trim(), ...data }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchShort])

  useEffect(() => {
    const subscription = watchLong((data) => {
      const arrOfRatings = Object.keys(data)
        .filter((key) => key.includes('rating'))
        .map((k) => data[k])
      const modifiedData = { formId: form.id, comment: data.comment.trim(), ratings: arrOfRatings }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchLong])

  useEffect(() => {
    const subscription = watchYesNo((data) => {
      data.answer = JSON.parse(data.answer)
      const modifiedData = { formId: form.id, ...data }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchYesNo])

  switch (form.type) {
    case 'Rating':
      return (
        <form className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-3">
          <div className="space-y-2">
            <QuestionText question={form.questions[0]} />
            <Controller
              control={controlShort}
              name="rating"
              defaultValue={formData.rating ? formData.rating : 0}
              render={({ field: { onChange, value } }) => (
                <RatingStars value={value} onRatingChange={onChange} />
              )}
            />
          </div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="3"
            placeholder={t('questionPlaceholder')}
            className="bg-[#f5f5f5] rounded-md py-2 px-1 bg-none outline-none tracking-[.65px] border-[1px] focus:border-[#ff6900]"
            {...registerShort('comment')}
          />
        </form>
      )
    case 'Ratings':
      return (
        <form className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-4">
          {form.questions.map((question, i) => {
            if (i > 2) {
              return
            }
            return (
              <div key={question.texts[0].text} className="space-y-2">
                <QuestionText question={question} />
                <Controller
                  control={controlLong}
                  name={`rating-${i}`}
                  defaultValue={formData.ratings ? formData?.ratings[i] : 0}
                  render={({ field: { onChange, value } }) => (
                    <RatingStars value={value} onRatingChange={onChange} />
                  )}
                />
              </div>
            )
          })}
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="3"
            placeholder={t('questionPlaceholder')}
            className="bg-[#f5f5f5] rounded-md py-2 px-1 bg-none outline-none tracking-[.65px] border-[1px] focus:border-[#ff6900]"
            {...registerLong('comment')}
          />
        </form>
      )
    case 'Answer':
      return (
        <form className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-[70px] px-9">
          <QuestionText question={form.questions[0]} />
          <div className="flex space-x-7 justify-center pt-14 ">
            <div className="flex">
              <input
                type="radio"
                id="thumbsUp"
                value={true}
                {...registerYesNo('answer')}
                className="peer hidden"
              />
              <label
                htmlFor="thumbsUp"
                className="rounded-full bg-[#e3f0d9] peer-checked:bg-green-400 hover:bg-green-400 hover:cursor-pointer"
              >
                <ThumbsUp />
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="thumbsDown"
                value={false}
                {...registerYesNo('answer')}
                className="peer hidden"
              />
              <label
                htmlFor="thumbsDown"
                className="rounded-full bg-[#ffd5d5] peer-checked:bg-red-400 hover:bg-red-400 hover:cursor-pointer"
              >
                <ThumbsDown />
              </label>
            </div>
            <input type="submit" value="Submit" className="hidden" />
          </div>
        </form>
      )
  }
}
