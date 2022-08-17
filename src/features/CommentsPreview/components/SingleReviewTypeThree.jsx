import * as SvgSprite from '@/assets/SvgSprite'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeThree = ({ reviewName, comment, answer }) => {
  return (
    <ReviewWrapper>
      <div className="flex justify-between items-center">
        <h3 className="w-[30%] text-lg mb-1.5 font-medium uppercase mb-0 break-words px-2">
          {reviewName}
        </h3>
        <p className="w-[50%] text-center break-words">{comment || 'No comment'}</p>
        <div className="w-[20%] flex justify-end">
          {answer ? <SvgSprite.ThumbsUpRounded /> : <SvgSprite.ThumbsDownRounded />}
        </div>
      </div>
    </ReviewWrapper>
  )
}
