import { SingleReviewTypeThree, reviewsTypeThree } from '@/features/ReviewTypeThree'

export const ReviewTypeThree = () => {
  return (
    <section>
      {reviewsTypeThree.map((item, index) => {
        return <SingleReviewTypeThree key={`review-type-three-${index}`} {...item} />
      })}
    </section>
  )
}
