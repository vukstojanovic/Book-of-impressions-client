import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export const RatingStars = () => {
  const [_rating, setRating] = useState(null)

  const ratingValue = (currentRating) => {
    setRating(currentRating)
  }

  return (
    <>
      <ReactStars
        count={5}
        size={35}
        isHalf={true}
        activeColor="#FFA500"
        color="#f7e9cd"
        onChange={ratingValue}
      />
      {/* <p>Your rate this with {rating || 0} rating</p> */}
    </>
  )
}
