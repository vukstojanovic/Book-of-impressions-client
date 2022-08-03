import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTranslations } from 'next-intl'

import { CommentsPreview } from '@/features/CommentsPreview'
import { comments, ReviewFirst } from '@/features/CommentsPreview'
import { ReviewTypeTwo } from '@/features/ReviewTypeTwo'
import { ReviewTypeThree } from '@/features/ReviewTypeThree'
import { RatingStars } from '@/components/RatingStars'
import { useFormStore } from '@/stores/form'

export const MainAccordion = () => {
  const [innerAccordion, setInnerAccordion] = useState(true)
  const t = useTranslations('Home')
  const isSuccess = useFormStore((state) => state.isSuccess)

  return (
    <>
      <div onClick={() => setInnerAccordion(!innerAccordion)}>
        <div className="flex justify-between items-center py-2 px-6 mb-40 cursor-pointer font-semibold">
          <h4>{t('seeOtherReviews')}</h4>
          {innerAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="px-6">
        {isSuccess && innerAccordion && (
          <div>
            {comments.map((comment, i) => {
              const { name, message, rating } = comment
              return (
                // <div key={i} className="p-3 my-3.5 shadow-lg">
                //   <h4 className="mb-2 ">{name}</h4>
                //   <p>{message}</p>
                //   <RatingStars value={rating} />
                // </div>
                <ReviewFirst key={`comment-${i}`} {...comment} />
              )
            })}
          </div>
        )}
        {!isSuccess && innerAccordion && <CommentsPreview />}
        {/* {innerAccordion && <ReviewTypeThree />}
        {innerAccordion && <ReviewTypeTwo />} */}
      </div>
    </>
  )
}
