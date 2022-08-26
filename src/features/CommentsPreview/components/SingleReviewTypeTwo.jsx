import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeTwo = ({ reviewName, ratings, comment }) => {
  return (
    <ReviewWrapper>
      <h3 className="text-lg mb-1.5 font-medium uppercase">
        {reviewName ? reviewName : 'Anonimous'}
      </h3>
      <p>{comment || 'No comment'}</p>
      {ratings?.map((review, index) => {
        return (
          <div key={`review-second-${index}`} className="my-2">
            <RatingStars value={review} edit={false} />
          </div>
        )
      })}
    </ReviewWrapper>
  )
}
