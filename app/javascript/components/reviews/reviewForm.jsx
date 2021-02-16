import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import useInput from '../../utils/form_input'

const POSSIBLE_RATINGS = [1,2,3,4,5];

const ReviewForm = () => {
  const [body, setBody] = useState("")
  const [rating, setRating] = useState(1)
  const dispatch = useDispatch()
  const { businessId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault
  
    dispatch(createReview(businessId, rating, body))
  }

  return (
    <form onSubmit={e => handleSubmit(e) }>
      {POSSIBLE_RATINGS.map((rating)=> (
        <label key={rating}>
          <input type='radio' name='rating' value={rating}
          onChange={ e => setRating(e.target.value) } required/>
      </label>
      ))}

      <input type="text" 
        name="review[body]" 
        placeholder="Write a review" 
        value={body} 
        onChange={ e => setBody(e.target.value) }/>

      <button>Submit Review</button>
    </form>
  )
}

const selectRating = (setRating) => {
  return (
    <section>
      {POSSIBLE_RATINGS.map((rating)=> (
        <label key={rating}>
          <input type='radio' name='rating' value={rating}
          onChange={ e => setRating(e.target.value) } required/>
      </label>
      ))}
    </section>
  )
}


export default ReviewForm