import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTranslations } from 'next-intl'
import { Garni } from '@/components/GarniAccordion'
import { CommentsPreview } from '@/components/CommentsPreview'

export const MainAccordion = () => {
  const [innerAccordion, setInnerAccordion] = useState(null)

  const t = useTranslations('Home')

  return (
    <div className="container mx-auto max-w-sm mt-10">
      <Garni />
      <div onClick={() => setInnerAccordion(!innerAccordion)}>
        <div className="flex justify-between items-center p-5 cursor-pointer">
          <h4>{t('seeOtherReviews')}</h4>
          {innerAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="p-3">
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
        {innerAccordion && <CommentsPreview />}
      </div>
    </div>
  )
}
