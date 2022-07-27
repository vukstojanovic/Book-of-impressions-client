import { useSwiper } from 'swiper/react'
import { useEffect, useState } from 'react'
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
  const setRating = useFormStore((state) => state.setRating)
  const setRatings = useFormStore((state) => state.setRatings)
  const [formOneMessage, setFormOneMessage] = useState(formOneData.message)
  const [formTwoMessage, setFormTwoMessage] = useState(formTwoData.message)

  function submitFormOne(e) {
    e.preventDefault()
    setFormOne({ formId: form.id, message: formOneMessage })
    swiper.slideNext()
  }

  function submitFormTwo(e) {
    e.preventDefault()
    setFormTwo({ formId: form.id, message: formTwoMessage })
    swiper.slideNext()
  }

  useEffect(() => {
    console.log(formOneData)
  }, [formOneData])

  switch (form.type) {
    case 'short':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-3"
          onSubmit={submitFormOne}
        >
          <div className="space-y-2">
            <p>{form.question}</p>
            <RatingStars value={formOneData.rating} onRatingChange={setRating} />
          </div>
          <input
            name="message"
            id="message"
            cols="30"
            rows="1"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            value={formOneMessage}
            onChange={(e) => setFormOneMessage(e.target.value)}
          />
        </form>
      )
    case 'long':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-20 px-9 space-y-4"
          onSubmit={submitFormTwo}
        >
          {form.questions.map((question, i) => {
            if (i > 2) {
              return
            }
            return (
              <div key={question} className="space-y-2">
                <p>{question}</p>
                <RatingStars onRatingChange={() => setRatings((index = i))} />
              </div>
            )
          })}
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="1"
            placeholder="Enter text here"
            className="border-b-[1px] border-b-[#e3e3e3] outline-none py-2 px-1"
            value={formTwoMessage}
            onChange={(e) => setFormTwoMessage(e.target.value)}
          ></textarea>
        </form>
      )
    case 'yes/no':
      return (
        <form
          className="shadow-box grid rounded-lg justify-center w-full pt-9 pb-[70px] px-9"
          onSubmit={(e) => {
            e.preventDefault()
            swiper.slideNext()
          }}
        >
          <p className="pb-14">This is yes or no form</p>
          <div className="flex space-x-7 justify-center">
            <button
              type="submit"
              className="rounded-full bg-[#e3f0d9] active:bg-opacity-60 hover:bg-green-400 hover:bg-opacity-80"
            >
              <ThumbsUp />
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#ffd5d5] active:bg-opacity-60 hover:bg-red-400 hover:bg-opacity-80"
            >
              <ThumbsDown />
            </button>
          </div>
        </form>
      )
  }
}
