import { reviewsTypeTwo } from '@/features/ReviewTypeTwo/mockupData/reviews'
import { ReviewSecond } from '@/components/ReviewSecond'

export const ReviewTypeTwo = () => {
  return (
    <section>
      {reviewsTypeTwo.map((item, index) => {
        return <ReviewSecond key={`review-type-two-${index}`} {...item} />
      })}
    </section>
  )
}
