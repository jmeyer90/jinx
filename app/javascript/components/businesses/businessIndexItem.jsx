import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {displayRating} from '../../utils/displayUtils'

const BusinessIndexItem = ({business}) => { 
  const review = useSelector(state => state.entities.reviews[business.main_review_id]) 
  const user = useSelector(state => state.entities.users[business.main_reviewer_id])  

  const displayUserReview = () => (
    user && review ? 
      <section className="business-index-review-container">
        <p className="business-index-review-user">{user.f_name} {user.l_name}</p>
        <p className="business-index-review-body">{review.body}</p>
      </section>
      : null
  )

  return (
    <Link className="business-index-container" to={`/businesses/${business.id}`}>
      <h2 className="business-index-title">{business.name}</h2>
      <span className="business-index-description">
        <ul className="business-index-rating">{displayRating(business.average_rating)}</ul>
        {displayUserReview()}
      </span>
    </Link>
    
  )
}

export default BusinessIndexItem