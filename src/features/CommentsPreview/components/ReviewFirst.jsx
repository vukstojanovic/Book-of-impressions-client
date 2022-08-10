import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const ReviewFirst = ({ reviewName, comment, rating }) => {
  return (
    <ReviewWrapper>
      <h3 className="text-xl mb-1.5 font-medium uppercase">{reviewName}</h3>
      <p>{comment}</p>
      <RatingStars value={rating || 0} />
    </ReviewWrapper>
  )
}
