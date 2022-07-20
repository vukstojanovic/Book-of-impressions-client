import * as SvgSprite from '@/assets/SvgSprite'
import { ReviewWrapper } from '@/components/ReviewWrapper'

export const SingleReviewTypeThree = ({ name, description, review }) => {
  return (
    <ReviewWrapper>
      <div className="flex justify-between items-center">
        <h3 className="max-w-[30%] text-lg mb-1.5 font-medium uppercase mb-0 break-words">
          {name}
        </h3>
        <p className="max-w-[45%]  break-words">{description}</p>
        <div className="max-w-[30%]">
          {review === 'like' ? <SvgSprite.ThumbsUpRounded /> : <SvgSprite.ThumbsDownRounded />}
        </div>
      </div>
    </ReviewWrapper>
  )
}
