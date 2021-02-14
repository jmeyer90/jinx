import React from 'react'
import { useSelector } from 'react-redux'
import AvgBusinessRating from '../reviews/avgBusinessRating'

const BusinessIndexItem = ({business}) => { 
  // const user = useSelector(state => state.entities.users[business.main_review.user_id]) 

  return (
    <section>
      <h2>{business.name}</h2>
      <AvgBusinessRating />
      {/* <p>{user.f_name} {user.l_name}</p> */}
      <p>{business.main_review.body}</p>
    </section>
  )
}

export default BusinessIndexItem