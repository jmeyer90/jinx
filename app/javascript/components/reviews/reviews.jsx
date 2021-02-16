import React from 'react'
import {useSelector} from 'react-redux'
import ReviewForm from './reviewForm'
import ReviewIndexItem from './reviewIndexItem'

// only listen to reviews lice of state
const Reviews = ({businessId}) => {
  const currentUserId = useSelector(state => state.session.currentUserId)
  const reviews = useSelector(state => state.entities.reviews)

  const displayReviewForm = () => (
    currentUserId ? <ReviewForm /> : null
  )

  const mapReviewsToIndexItems = () => (
    <ul>
      {Object.values(reviews).map(review =>(
        <ReviewIndexItem key={review.id} review={review} />
      ))}
    </ul>
  )

  return (
    <section>
      {displayReviewForm()}
      {mapReviewsToIndexItems()}
    </section>
  )
}

export default Reviews