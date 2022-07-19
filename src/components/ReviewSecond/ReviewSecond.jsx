import { RatingStars } from '@/components/RatingStars'

export const ReviewSecond = ({ name, reviews }) => {
  return (
    <div className="w-200 p-6 border border-solid my-4 rounded-lg shadow-md">
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
    </div>
  )
}
