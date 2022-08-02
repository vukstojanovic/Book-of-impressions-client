import { useState } from 'react'
import { useTranslations } from 'use-intl'
import { comments, ReviewFirst } from '@/features/CommentsPreview'

export const CommentsPreview = () => {
  const firstTwo = comments.slice(0, 2)
  const rest = comments.slice(2)
  const [blurClass, setBlurClass] = useState('blur-sm pointer-events-none')
  const t = useTranslations('Home')

  function showAllComments() {
    setBlurClass('')
  }

  return (
    <>
      <section>
        {firstTwo.map((comment) => (
          <ReviewFirst
            key={comment.name}
            name={comment.name}
            message={comment.message}
            rating={comment.rating}
          />
        ))}
      </section>
      <div className="relative">
        <section className={`${blurClass}`}>
          {rest.map((comment) => (
            <ReviewFirst
              key={comment.name}
              name={comment.name}
              message={comment.message}
              rating={comment.rating}
            />
          ))}
        </section>
        {rest.length > 0 && blurClass && (
          <button
            onClick={showAllComments}
            className="absolute top-[60px] left-1/2 -translate-x-2/4 w-11/12 md:w-96 py-3 bg-boiOrange hover:bg-boiOrangeHover rounded-md uppercase text-white font-medium"
          >
            {t('unlockReviews')}
          </button>
        )}
      </div>
    </>
  )
}
