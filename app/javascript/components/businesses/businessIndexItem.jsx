import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {displayRating} from '../../utils/displayUtils'
import usePath from '../../utils/path_util'

const BusinessIndexItem = ({business}) => { 
  const review = useSelector(state => state.entities.reviews[business.main_review_id]) 
  const user = useSelector(state => state.entities.users[business.main_reviewer_id])
  const path = usePath()

  debugger
  const searchClassName = path == "/search" ? "-search" : ""

  const displayReviewIfSearch = () => (
    path == "/search" ? 
      displayUserReview()
      : null
  )

  const displayUserReview = () => (
    user && review ? 
      <section className="business-index-review-container">
        <p className="business-index-review-user">{user.f_name} {user.l_name}</p>
        <p className="business-index-review-body">{review.body}</p>
      </section>
      : null
  )

  const displayAttributes = () => {
    const attr_names = business.attrs.map(attr => attr.name)
    return (
        <p className="business-index-attributes">{attr_names.join(", ")}</p>
    )
  }

  return (
    <Link className={`business-index-container${searchClassName}`} to={`/businesses/${business.id}`}>
      <div className={`business-index-image${searchClassName}`}>
        <img className={`business-index-image-src${searchClassName}`} src="" alt="business review image" />
      </div>
      <section className={`business-index-description${searchClassName}`}>
        <h2 className={`business-index-title${searchClassName}`}>{business.name}</h2>
        <span className={`business-index-rating-container`}>
          {displayRating(business.average_rating)}
          <p className={`business-index-num-reviews`}>10 reviews</p>
        </span>
        {displayAttributes()}
        <p className={`business-index-location${searchClassName}`}>Location</p>
        {displayReviewIfSearch()}
      </section>
    </Link>
    
  )
}

export default BusinessIndexItem