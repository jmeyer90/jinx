import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import useInput from '../../utils/form_input'

const POSSIBLE_RATINGS = [1,2,3,4,5];

const ReviewForm = () => {
  const [body, setBody] = useInput("")
  const [rating, setRating] = useInput(1)

  return (
    <form onSubmit={e => handleSubmit(e, rating, body) }>
      { selectRating(setRating) }

      <input type="text" 
        name="review[body]" 
        placeholder="Write a review" 
        value={body} 
        onChange={ setBody }/>

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
          onChange={ setRating } required/>
      </label>
      ))}
    </section>
  )
}

const handleSubmit = (e, rating, body) => {
  e.preventDefault
  const dispatch = useDispatch()
  const { businessId } = useParams()

  dispatch(createReview(businessId, rating, body))
}

export default ReviewForm