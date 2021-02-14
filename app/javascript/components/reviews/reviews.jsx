import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviews } from '../../actions/review_actions'
import ReviewForm from './reviewForm'
import ReviewIndexItem from './reviewIndexItem'

// only listen to reviews lice of state
const Reviews = ({businessId}) => {
  const reviews = useSelector(state => state.entities.reviews)
  const dispatch = useDispatch()
    // debugger

  // useEffect(() => {
  //   dispatch(fetchReviews(businessId))
  // }, [dispatch])
  
  return (
    <section>
      <ReviewForm />
      <ul>
        {Object.values(reviews).map(review =>(
          <ReviewIndexItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews