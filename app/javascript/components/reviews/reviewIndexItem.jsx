import React from 'react'
import { useSelector } from 'react-redux'

const ReviewIndexItem = ({review}) => {
  const user = useSelector(state => state.entities.users[review.user_id])

  return (
    <div>
      <p>User: {user.f_name} {user.l_name}</p>
      <p>{review.body}</p>
    </div>
  )
}

export default ReviewIndexItem