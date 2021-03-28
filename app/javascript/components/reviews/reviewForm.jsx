import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createReview, updateReview } from '../../actions/review_actions';

const POSSIBLE_RATINGS = [1,2,3,4,5];

const ReviewForm = ({action, modal, review, setEdit}) => {
  const [defaultBody, defaultReview] = review ? [review.body, review.rating] : ["", 1]
  const [body, setBody] = useState(defaultBody)
  const [rating, setRating] = useState(defaultReview)
  const dispatch = useDispatch()
  const { businessId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formReview = { body, rating }
    if (action == "create") {
      dispatch(createReview(businessId, formReview))
    } else {
      const reviewId = review.id
      dispatch(updateReview(businessId, reviewId, formReview))
      setEdit(false)
    }
    setBody("")
    setRating(1)
  }

  return (
    <form onSubmit={e => handleSubmit(e) }>
      <h1>{action}</h1>
      {POSSIBLE_RATINGS.map((possibleRating)=> {
        const checked = possibleRating == rating
        return (
          <label key={possibleRating}>
            <input type='radio' name='review[rating]' value={possibleRating}
            onChange={ e => setRating(e.target.value) } required
            checked={checked}/>
          </label>
        )
      })}

      <input type="text" 
        name="review[body]" 
        placeholder="Write a review" 
        value={body} 
        onChange={ e => setBody(e.target.value) }/>

      <button>Check-In</button>
    </form>
  )
}

export default ReviewForm