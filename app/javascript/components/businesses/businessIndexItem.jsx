import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {displayRating} from '../../utils/displayUtils'

const BusinessIndexItem = ({business}) => { 
  const review = useSelector(state => state.entities.reviews[business.main_review_id]) 
  const user = useSelector(state => state.entities.users[business.main_reviewer_id])  

  const attributes = [
    "attr1",
    "attr2",
    "attr3"
  ]

  const displayUserReview = () => (
    user && review ? 
      <section className="business-index-review-container">
        <p className="business-index-review-user">{user.f_name} {user.l_name}</p>
        <p className="business-index-review-body">{review.body}</p>
      </section>
      : null
  )

  const displayAttributes = () => (
    <ul className="business-index-attribute-container">
      {attributes.map(attr => (
        <p key={`${attr}`} className="business-index-attribute">{attr}</p>
      ))}
    </ul>
  )

  return (
    <Link className="business-index-container" to={`/businesses/${business.id}`}>
      <img className="business-index-image" src="" alt="business review image" />
      <h2 className="business-index-title">{business.name}</h2>
      <secrtion className="business-index-description">
        <span>
          <ul className="business-index-rating">{displayRating(business.average_rating)}</ul>
          <p className="business-index-num-revuiews">10 reviews</p>
        </span>
        {displayAttributes()}
      </secrtion>
    </Link>
    
  )
}

export default BusinessIndexItem