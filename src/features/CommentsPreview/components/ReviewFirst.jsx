import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const ReviewFirst = ({ reviewName, comment, rating }) => {
  return (
    <ReviewWrapper>
      <h3 className="text-xl mb-1.5 font-medium uppercase">
        {reviewName ? reviewName : 'Anonimous'}
      </h3>
      <p>{comment || 'No comment'}</p>
      <RatingStars value={rating} edit={false} />
    </ReviewWrapper>
  )
}
