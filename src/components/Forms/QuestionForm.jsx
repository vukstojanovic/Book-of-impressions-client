import { useSwiper } from 'swiper/react'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { ThumbsDown, ThumbsUp } from '@/assets/SvgSprite'
import { RatingStars } from '../RatingStars'
import { useFormStore } from '@/zustand/store'

export const QuestionForm = ({ form }) => {
  const swiper = useSwiper()
  const formOneData = useFormStore((state) => state.formOneData)
  const formTwoData = useFormStore((state) => state.formTwoData)
  const setFormOne = useFormStore((state) => state.setFormOne)
  const setFormTwo = useFormStore((state) => state.setFormTwo)
  const setFormThree = useFormStore((state) => state.setFormThree)
  // const setRatings = useFormStore((state) => state.setRatings)
  // const [formOneMessage, setFormOneMessage] = useState(formOneData.message)
  // const [formTwoMessage, setFormTwoMessage] = useState(formTwoData.message)

  const {
    register: registerShort,
    handleSubmit: handleSubmitShort,
    control: controlShort,
  } = useForm()

  const { register: registerLong, handleSubmit: handleSubmitLong, control: controlLong } = useForm()

  const {
    register: registerYesNo,
    handleSubmit: handleSubmitYesNo,
    control: controlYesNo,
  } = useForm()

  // function submitFormOne(e) {
  //   e.preventDefault()
  //   setFormOne({ formId: form.id, message: formOneMessage })
  //   swiper.slideNext()
  // }

  function submitDataShort(data) {
    console.log(data)
    setFormOne(data)
    swiper.slideNext()
  }

  function submitDataLong(data) {
    console.log(data)
    console.log(Object.keys(data))
    const arrOfRatings = Object.keys(data)
      .filter((key) => key.includes('rating'))
      .map((k) => data[k])
    const modifiedData = { message: data.message, ratings: arrOfRatings }
    setFormTwo(modifiedData)
    swiper.slideNext()
  }

  function submitDataYesNo(data) {
    console.log(data)
    // setFormOne(data)
    swiper.slideNext()
  }

  // function submitFormTwo(e) {
  //   e.preventDefault()
  //   setFormTwo({ formId: form.id, message: formTwoMessage })
  //   swiper.slideNext()
  // }

  useEffect(() => {
    console.log(formTwoData)
  }, [formTwoData])

  switch (form.type) {
    case 'short':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-3"
          onSubmit={handleSubmitShort(submitDataShort)}
        >
          <div className="space-y-2">
            <p>{form.question}</p>
            <Controller
              control={controlShort}
              name="rating"
              defaultValue={formOneData.rating}
              render={({ field: { onChange, value } }) => (
                <RatingStars value={value} onRatingChange={onChange} />
              )}
            />
          </div>
          <input
            name="message"
            id="message"
            cols="30"
            rows="1"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            // value={formOneMessage}
            // onChange={(e) => setFormOneMessage(e.target.value)}
            {...registerShort('message')}
          />
        </form>
      )
    case 'long':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-4"
          onSubmit={handleSubmitLong(submitDataLong)}
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
                  defaultValue={formTwoData.ratings[i]}
                  render={({ field: { onChange, value } }) => (
                    <RatingStars value={value} onRatingChange={onChange} />
                  )}
                />
                {/* <RatingStars value={formTwoData.ratings[i]} onRatingChange={() => setRatings()} /> */}
              </div>
            )
          })}
          <input
            name="message"
            id="message"
            // cols="30"
            // rows="1"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            // value={formTwoMessage}
            // onChange={(e) => setFormTwoMessage(e.target.value)}
            {...registerLong('message')}
          />
        </form>
      )
    case 'yes/no':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-[70px] px-9"
          onSubmit={handleSubmitYesNo(submitDataYesNo)}
        >
          <p className="pb-14">This is yes or no form</p>
          <div className="flex space-x-7 justify-center">
            <button
              type="submit"
              className="rounded-full bg-[#e3f0d9] active:bg-opacity-60 hover:bg-green-400 hover:bg-opacity-80"
              {...registerYesNo('yes')}
            >
              <ThumbsUp />
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#ffd5d5] active:bg-opacity-60 hover:bg-red-400 hover:bg-opacity-80"
              {...registerYesNo('no')}
            >
              <ThumbsDown />
            </button>
          </div>
        </form>
      )
  }
}
