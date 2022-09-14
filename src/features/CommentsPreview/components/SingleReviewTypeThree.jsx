import dayjs from 'dayjs'

import * as SvgSprite from '@/assets/SvgSprite'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeThree = ({ reviewName, answer, createdDate }) => {
  return (
    <ReviewWrapper>
      <div>
        <h3 className="text-lg mb-1.5 font-medium uppercase">
          {reviewName ? reviewName : 'Anonimous'}
        </h3>
        <span className="text-gray-400 text-sm">{dayjs(createdDate).fromNow()}</span>
        <div className="pt-3">
          {answer ? <SvgSprite.ThumbsUpRounded /> : <SvgSprite.ThumbsDownRounded />}
        </div>
      </div>
    </ReviewWrapper>
  )
}
