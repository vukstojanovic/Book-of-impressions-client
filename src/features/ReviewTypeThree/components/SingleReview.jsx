import * as SvgSprite from '@/assets/SvgSprite'

export const SingleReview = ({ name, description, review }) => {
  return (
    <div className="w-200 p-6 border border-solid my-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="max-w-[30%] text-lg mb-1.5 font-medium uppercase mb-0 break-words">
          {name}
        </h3>
        <p className="max-w-[45%]  break-words">{description}</p>
        <div className="max-w-[30%]">
          {review === 'like' ? <SvgSprite.ThumbsUpRounded /> : <SvgSprite.ThumbsDownRounded />}
        </div>
      </div>
    </div>
  )
}
