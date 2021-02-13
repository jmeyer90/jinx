import React from 'react'
import ReviewForm from './reviewForm'
import ReviewIndexItem from './reviewIndexItem'

// only listen to reviews lice of state
const Reviews = () => {
  return (
    <section>
      <ReviewForm />
      <p>Reviews</p>
      <ReviewIndexItem />
    </section>
  )
}

export default Reviews