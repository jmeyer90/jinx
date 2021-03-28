import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReviewForm from './reviewForm'
import ReviewIndexItem from './reviewIndexItem'
import {fetchReviews} from '../../actions/review_actions'
import {createReviewPartial} from '../../utils/review_util'

// only listen to reviews lice of state
const Reviews = ({businessId}) => {
  const currentUserId = useSelector(state => state.session.currentUserId)
  const reviews = useSelector(state => state.entities.reviews)
  const dispatch = useDispatch()

  const displayReviewForm = () => (
    currentUserId ? 
      <ReviewForm action={createReviewPartial.action} modal={createReviewPartial.modal}/> 
    : null
  )

  useEffect(() => {
    dispatch(fetchReviews(businessId))
  }, [dispatch])

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