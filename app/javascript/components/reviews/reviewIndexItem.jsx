import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteReview} from '../../actions/review_actions'
import {displayRating} from '../../utils/displayUtils'
import {editReviewPartial} from '../../utils/review_util'
import ReviewForm from './reviewForm'

const ReviewIndexItem = ({review}) => {
  const user = useSelector(state => state.entities.users[review.user_id])
  const currentUserId = useSelector(state => state.session.currentUserId)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()

  const reviewActionsIfAuthor = () => (
    currentUserId && user.id == currentUserId ? 
      displayReviewOrEditForm()
      : null
  )
  
  const displayReviewOrEditForm = () => (
    edit ?
      <ReviewForm 
        action={editReviewPartial.action} 
        modal={editReviewPartial.modal}
        review={review}
        setEdit={setEdit}
      />
      :
      <div className="review-details">
        <span>{displayRating(review.rating)}</span>
        <p>{review.body}</p>
        <div className="review-actions">
          <button onClick={e => setEdit(!edit)}>Edit</button>
          <button onClick={e => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
      </div>
  )

  return (
    <div className="review-index-item">
      <p>User: {user.f_name} {user.l_name}</p>
      {reviewActionsIfAuthor()}
    </div>
  )
}

export default ReviewIndexItem