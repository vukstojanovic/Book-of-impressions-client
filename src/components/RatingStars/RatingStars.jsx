import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export const RatingStars = ({ value }) => {
  const [starValue, setStarValue] = useState(value)

  const ratingValue = (currentRating) => {
    setStarValue(currentRating)
  }

  return (
    <>
      <ReactStars
        count={5}
        size={50}
        value={starValue}
        isHalf={true}
        activeColor="#ff6900"
        color="#fbe9db"
        onChange={ratingValue}
      />
    </>
  )
}
