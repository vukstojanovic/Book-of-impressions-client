import { RatingStars } from '@/components/RatingStars'

export const ReviewFirst = ({ name, message }) => {
  return (
    <div className="w-200 p-6 border border-solid my-4 rounded-lg shadow-md">
      <h3 className="text-xl mb-1.5 font-medium uppercase">{name}</h3>
      <p>{message}</p>
      <RatingStars value={0} />
    </div>
  )
}
