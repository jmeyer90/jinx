import React from 'react'
import { useSelector} from 'react-redux'
import ReviewForm from './reviewForm'
import ReviewIndexItem from './reviewIndexItem'

// only listen to reviews lice of state
const Reviews = ({businessId}) => {
  const reviews = useSelector(state => state.entities.reviews)
  
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