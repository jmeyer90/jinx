import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteReview} from '../../actions/review_actions'
import {displayRating} from '../../utils/displayUtils'
import {editReviewPartial} from '../../utils/review_util'
import ReviewForm from './reviewForm'

const ReviewIndexItem = ({review}) => {
  if (!review) return null

  const user = useSelector(state => state.entities.users[review.user_id])
  const currentUserId = useSelector(state => state.session.currentUserId)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()

  const reviewActionsIfAuthor = () => (
    currentUserId && user.id == currentUserId ? 
      displayReviewOrEditForm()
      : displayReview()
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
        {displayRating(review.rating)}
        <p className="review-body">{review.body}</p>
        {displayImage()}
        <div className="review-actions">
          <button className="review-form-button" onClick={e => setEdit(!edit)}>Edit</button>
          <button className="review-form-button" onClick={e => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
      </div>
  )

  const displayReview = () => (
    <div className="review-details">
      {displayRating(review.rating)}
      <p className="review-body">{review.body}</p>
      {displayImage()}
    </div>
  )

  const displayImage = () => {
    return review.imageUrl ? 
      <img 
        className="review-index-image" 
        src={review.imageUrl}/>
      : null
  }
  
  debugger
  return (
    <div className="review-index-item">
      <section className="review-user-info">
        <img className="review-user-profile-image" src={window.wizard} alt="user profile image" />
        <p className="review-username">{user.f_name} {user.l_name}</p>
      </section>
      {reviewActionsIfAuthor()}
    </div>
  )
}

export default ReviewIndexItem