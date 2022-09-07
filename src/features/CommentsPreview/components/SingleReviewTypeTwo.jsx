import dayjs from 'dayjs'

import { RatingStars } from '@/components/RatingStars'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeTwo = ({ reviewName, ratings, comment, createdDate }) => {
  return (
    <ReviewWrapper>
      <div className="flex flex-wrap items-center mb-1.5">
        <h3 className="text-lg font-medium uppercase mr-3">
          {reviewName ? reviewName : 'Anonimous'}
        </h3>
        <span className="text-gray-400 text-sm">{dayjs(createdDate).fromNow()}</span>
      </div>
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
