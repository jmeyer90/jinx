import React from 'react'
import { useSelector } from 'react-redux'
import AvgBusinessRating from '../reviews/avgBusinessRating'

const BusinessIndexItem = ({business}) => { 
  const review = useSelector(state => state.entities.reviews[business.main_review_id]) 
  const user = useSelector(state => state.entities.users[business.main_reviewer_id])  


  return (
    <section>
      <h2>{business.name}</h2>
      <p>{business.average_rating}</p>
      <p>{user.f_name} {user.l_name}</p>
      <p>{review.body}</p>
    </section>
  )
}

export default BusinessIndexItem