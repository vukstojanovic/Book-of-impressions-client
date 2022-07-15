import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export const RatingStars = () => {
  const [rating, setRating] = useState(null)

  const ratingValue = (currentRating) => {
    setRating(currentRating)
  }

  return (
    <>
      <ReactStars count={5} size={50} isHalf={true} activeColor="#96ceb4" onChange={ratingValue} />
      <p>Your rate this with {rating || 0} rating</p>
    </>
  )
}
