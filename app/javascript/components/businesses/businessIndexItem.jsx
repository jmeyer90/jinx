import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const BusinessIndexItem = ({business}) => { 
  const review = useSelector(state => state.entities.reviews[business.main_review_id]) 
  const user = useSelector(state => state.entities.users[business.main_reviewer_id])  

  const displayUserReview = () => (
    user && review ? 
      <section>
        <p>{user.f_name} {user.l_name}</p>
        <p>{review.body}</p>
      </section>
      : null
  )

  return (
    <Link className="business-index-container" to={`/businesses/${business.id}`}>
      <h2>{business.name}</h2>
      <p>{business.average_rating}</p>
      {displayUserReview()}
    </Link>
    
  )
}

export default BusinessIndexItem