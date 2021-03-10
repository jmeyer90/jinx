import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteReview} from '../../actions/review_actions'

const ReviewIndexItem = ({review}) => {
  const user = useSelector(state => state.entities.users[review.user_id])
  const currentUserId = useSelector(state => state.session.currentUserId)
  const dispatch = useDispatch()

  const deleteButtonIfAuthor = () => (
    currentUserId && user.id == currentUserId ? 
      <button onClick={e => dispatch(deleteReview(review.id))}>Delete</button>
      : null
  )
  
  return (
    <div>
      <p>User: {user.f_name} {user.l_name}</p>
      <span>{review.rating}</span>
      <p>{review.body}</p>
      {deleteButtonIfAuthor()}
    </div>
  )
}

export default ReviewIndexItem