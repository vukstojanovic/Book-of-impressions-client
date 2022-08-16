import { ReviewFirst } from '@/features/CommentsPreview'
import { SingleReviewTypeThree } from '@/features/CommentsPreview'
import { SingleReviewTypeTwo } from '@/features/CommentsPreview'
import { useFormStore } from '@/stores/form'

export const CommentsPreview = ({ data, formType }) => {
  const firstTwo = data.slice(0, 2)
  const rest = data.slice(2)
  const isSuccess = useFormStore((state) => state.isSuccess)

  function displayRightReview(review) {
    if (formType === 'Rating') {
      return <ReviewFirst key={review.id} {...review} />
    } else if (formType === 'Ratings') {
      return <SingleReviewTypeTwo key={review.id} {...review} />
    } else if (formType === 'Answer') {
      return <SingleReviewTypeThree key={review.id} {...review} />
    }
  }

  return (
    <>
      <section>{firstTwo.map((review) => displayRightReview(review))}</section>
      <div className="relative">
        <section className={isSuccess ? '' : 'blur-sm pointer-events-none select-none'}>
          {rest.map((review) => displayRightReview(review))}
        </section>
      </div>
    </>
  )
}
