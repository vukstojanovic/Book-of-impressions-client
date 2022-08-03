import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { RatingStars } from '../RatingStars'

import { ThumbsDown, ThumbsUp } from '@/assets/SvgSprite'
import { useFormStore } from '@/stores/form'

export const QuestionForm = ({ form }) => {
  const formData = useFormStore((state) => state.formData)
  const setFormData = useFormStore((state) => state.setFormData)

  const {
    register: registerShort,
    control: controlShort,
    watch: watchShort,
  } = useForm({ defaultValues: { message: formData?.message } })

  const {
    register: registerLong,
    control: controlLong,
    watch: watchLong,
  } = useForm({ defaultValues: { message: formData?.message } })

  const { register: registerYesNo, watch: watchYesNo } = useForm({
    defaultValues: { answer: formData?.answer },
  })

  useEffect(() => {
    const subscription = watchShort((data) => {
      const modifiedData = { formId: form.id, message: data.message.trim(), ...data }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchShort])

  useEffect(() => {
    const subscription = watchLong((data) => {
      console.log(Object.keys(data))
      const arrOfRatings = Object.keys(data)
        .filter((key) => key.includes('rating'))
        .map((k) => data[k])
      const modifiedData = { formId: form.id, message: data.message.trim(), ratings: arrOfRatings }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchLong])

  useEffect(() => {
    const subscription = watchYesNo((data) => {
      const modifiedData = { formId: form.id, ...data }
      setFormData(modifiedData)
    })
    return () => subscription.unsubscribe()
  }, [watchYesNo])

  switch (form.type) {
    case 'short':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-3"
          // onSubmit={handleSubmitShort(submitDataShort)}
        >
          <div className="space-y-2">
            <p>{form.question}</p>
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
            name="message"
            id="message"
            cols="30"
            rows="1"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            {...registerShort('message')}
          />
        </form>
      )
    case 'long':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-4"
          // onSubmit={handleSubmitLong(submitDataLong)}
        >
          {form.questions.map((question, i) => {
            if (i > 2) {
              return
            }
            return (
              <div key={question} className="space-y-2">
                <p>{question}</p>
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
          <input
            name="message"
            id="message"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            {...registerLong('message')}
          />
        </form>
      )
    case 'yes/no':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-[70px] px-9"
          // onSubmit={handleSubmitYesNo(submitDataYesNo)}
        >
          <p className="pb-14">This is yes or no form</p>
          <div className="flex space-x-7 justify-center">
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
                className="rounded-full bg-[#e3f0d9] peer-checked:bg-green-400"
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
                className="rounded-full bg-[#ffd5d5] peer-checked:bg-red-400"
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
