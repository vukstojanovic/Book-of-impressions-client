import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export const RatingStars = ({ value, onRatingChange, edit }) => {
  const [starValue, setStarValue] = useState(value)

  const ratingValue = (currentRating) => {
    setStarValue(currentRating)
    if (onRatingChange) onRatingChange(currentRating)
  }

  return (
    <>
      <ReactStars
        count={5}
        size={30}
        value={starValue}
        isHalf={false}
        activeColor="#ff6900"
        color="#fbe9db"
        onChange={ratingValue}
        edit={edit}
      />
    </>
  )
}
