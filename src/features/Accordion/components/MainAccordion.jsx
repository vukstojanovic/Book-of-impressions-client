import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTranslations } from 'next-intl'
import { CommentsPreview } from '@/components/CommentsPreview'
import { ReviewTypeTwo } from '@/features/ReviewTypeTwo'

export const MainAccordion = () => {
  const [innerAccordion, setInnerAccordion] = useState(true)

  const t = useTranslations('Home')

  return (
    <>
      <div onClick={() => setInnerAccordion(!innerAccordion)}>
        <div className="flex justify-between items-center py-2 px-6 cursor-pointer font-semibold">
          <h4>{t('seeOtherReviews')}</h4>
          {innerAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="px-6">
        {/* {innerAccordion && (
          <div>
            {questions.map((q, i) => {
              const { name, question, rating } = q
              return (
                <div key={i} className="p-3 my-3.5 shadow-lg">
                  <h4 className="mb-2 ">{name}</h4>
                  <p>{question}</p>
                  <RatingStars value={rating} />
                </div>
              )
            })}
          </div>
        )} */}
        {/* {innerAccordion && <CommentsPreview />} */}
        {innerAccordion && <ReviewTypeTwo />}
      </div>
    </>
  )
}
