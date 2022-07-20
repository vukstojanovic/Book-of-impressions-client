import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const ReviewFirst = ({ name, message }) => {
  return (
    <ReviewWrapper>
      <h3 className="text-xl mb-1.5 font-medium uppercase">{name}</h3>
      <p>{message}</p>
      <RatingStars value={0} />
    </ReviewWrapper>
  )
}
