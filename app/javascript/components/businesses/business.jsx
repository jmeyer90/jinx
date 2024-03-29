import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessImages from './buinessImages'
import BusinessAttributes from './businessAttribtues'
import BusinessContact from './businessContact'
import Map from '../map/map'
import BusinessHours from './buinessHours'
import Reviews from '../reviews/reviews'
import { displayRating } from '../../utils/displayUtils'
import { useParams } from 'react-router-dom'
import { fetchBusiness } from '../../actions/business_actions'
import { REVIEW_MODAL_ACTION } from '../../reducers/ui/uiReducer'
import ReviewModal from '../reviews/reviewModal'


const Business = () => {
  const dispatch = useDispatch()
  const { businessId } = useParams()
  const business = useSelector( state => state.entities.businesses[businessId] )
  const loggedIn = useSelector( state => state.session.currentUserId)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchBusiness(businessId))
  }, [dispatch])

  const renderBusinessDetails = () => (
    business ? 
      <section className="business-details">
        <section className="business-header">
          <h1 className="business-name">{business.name}</h1>
          {displayRating(business.average_rating)}
          {renderFormButton()}
        </section>
        <section className="loaction-hours">
          <h2 className="business-section-header">Location & Hours</h2>
          <section className="business-map-hours-container">
            <div className="business-map-container">
              <Map business={business}/>
            </div>
            <BusinessHours business={business}/>
          </section>
        </section>
        <BusinessAttributes business={business}/>
      </section>
      : null
  )

  const renderFormButton = () => (
    loggedIn ?
      <button onClick={() => dispatch(REVIEW_MODAL_ACTION)}>Write a Review</button>
      : null
  )

  const renderBusinessImages = () => (
    business ?
      <BusinessImages businessId={businessId}/>
      : null
  )
  
  return (
    <section className="business-show-container">
      {renderBusinessImages()}
      <section className="business-info-container">
        <section className="business-details-reviews-container">
          <ReviewModal />
          {renderBusinessDetails()}
          <Reviews businessId={businessId}/>
        </section>
        <BusinessContact />
      </section>
    </section>
  )
}

export default Business