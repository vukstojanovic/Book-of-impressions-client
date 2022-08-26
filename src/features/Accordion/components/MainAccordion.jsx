import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTranslations } from 'next-intl'

import { CommentsPreview } from '@/features/CommentsPreview'

export const MainAccordion = ({ status, isError, data, error, formType }) => {
  const [innerAccordion, setInnerAccordion] = useState(true)
  const t = useTranslations('Home')

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
        {innerAccordion && <CommentsPreview data={data[0]} formType={formType} />}
      </div>
    </>
  )
}
