import { SingleReviewTypeTwo, reviewsTypeTwo } from '@/features/ReviewTypeTwo'

export const ReviewTypeTwo = () => {
  return (
    <section>
      {reviewsTypeTwo.map((item, index) => {
        return <SingleReviewTypeTwo key={`review-type-two-${index}`} {...item} />
      })}
    </section>
  )
}
