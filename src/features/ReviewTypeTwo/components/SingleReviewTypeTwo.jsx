import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeTwo = ({ name, reviews }) => {
  return (
    <ReviewWrapper>
      <h3 className="text-lg mb-1.5 font-medium uppercase">{name}</h3>
      {reviews.map((review, index) => {
        const { text, rating } = review
        return (
          <div key={`review-second-${index}`} className="my-2">
            <p>{text}</p>
            <RatingStars value={rating} />
          </div>
        )
      })}
    </ReviewWrapper>
  )
}
