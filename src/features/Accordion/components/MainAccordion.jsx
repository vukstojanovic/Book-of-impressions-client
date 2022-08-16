import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTranslations } from 'next-intl'

import { CommentsPreview } from '@/features/CommentsPreview'
import { comments, ReviewFirst } from '@/features/CommentsPreview'
import { ReviewTypeTwo } from '@/features/ReviewTypeTwo'
import { ReviewTypeThree } from '@/features/ReviewTypeThree'
import { RatingStars } from '@/components/RatingStars'
import { useFormStore } from '@/stores/form'

export const MainAccordion = ({ status, isError, data, error }) => {
  const [innerAccordion, setInnerAccordion] = useState(true)
  const t = useTranslations('Home')
  const isSuccess = useFormStore((state) => state.isSuccess)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <>
      <div onClick={() => setInnerAccordion(!innerAccordion)}>
        <div className="flex justify-between items-center py-2 px-6 cursor-pointer font-semibold">
          <h4>{t('seeOtherReviews')}</h4>
          {innerAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="px-6">
        {isSuccess && innerAccordion && (
          <div>
            {data?.map((review, i) => {
              return <ReviewFirst key={`comment-${i}`} {...review} />
            })}
          </div>
        )}
        {!isSuccess && innerAccordion && <CommentsPreview data={data} />}
        {innerAccordion && <ReviewTypeThree />}
        {innerAccordion && <ReviewTypeTwo />}
      </div>
    </>
  )
}
