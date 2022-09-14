import dayjs from 'dayjs'

import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeTwo = ({ reviewName, ratings, comment, createdDate }) => {
  return (
    <ReviewWrapper>
      <div>
        <h3 className="text-lg mb-1.5 font-medium uppercase">
          {reviewName ? reviewName : 'Anonimous'}
        </h3>
      </div>
      <span className="text-gray-400 text-sm">{dayjs(createdDate).fromNow()}</span>
      <p className="mt-2">{comment || 'No comment'}</p>
      {ratings?.map((review, index) => {
        return (
          <div key={`review-second-${index}`} className="my-0.5">
            <RatingStars value={review} edit={false} />
          </div>
        )
      })}
    </ReviewWrapper>
  )
}
