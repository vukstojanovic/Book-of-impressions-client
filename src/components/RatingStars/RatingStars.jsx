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
<<<<<<< HEAD
        size={50}
        isHalf={true}
        activeColor="#ff6900"
        color="#ffe9da"
=======
        size={35}
        isHalf={true}
        activeColor="#FFA500"
        color="#f7e9cd"
>>>>>>> dev
        onChange={ratingValue}
      />
      {/* <p>Your rate this with {rating || 0} rating</p> */}
    </>
  )
}
