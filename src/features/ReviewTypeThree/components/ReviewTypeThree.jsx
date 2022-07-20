import { SingleReview, reviewsTypeThree } from '@/features/ReviewTypeThree'

export const ReviewTypeThree = () => {
  return (
    <section>
      {reviewsTypeThree.map((item, index) => {
        return <SingleReview key={`review-type-three-${index}`} {...item} />
      })}
    </section>
  )
}
