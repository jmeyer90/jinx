import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessImages from './buinessImages'
import BusinessHeader from './businessHeader'
import BusinessAttributes from './businessAttribtues'
import BusinessContact from './businessContact'
import Map from '../map/map'
import BusinessHours from './buinessHours'
import Reviews from '../reviews/reviews'
import {displayRating} from '../../utils/displayUtils'
import { useParams } from 'react-router-dom'
import { fetchBusiness } from '../../actions/business_actions'


const Business = () => {
  const dispatch = useDispatch()
  const { businessId } = useParams()
  const business = useSelector( state => state.entities.businesses[businessId] )

  useEffect(() => {
    dispatch(fetchBusiness(businessId))
  }, [dispatch])

  const renderBusinessDetails = () => (
    business ? 
      <section className="business-details">
        <BusinessHeader business={business}/>
        <ul className="business-show-rating">{displayRating(business.average_rating)}</ul>
        <section>
          <h2>Location & Hours</h2>
          <Map />
          <BusinessHours business={business}/>
        </section>
        <BusinessAttributes business={business}/>
      </section>
      : null
  )

  return (
    <section className="business-show-container">
      <BusinessImages business={business}/>
      {renderBusinessDetails()}
      <BusinessContact />
      <Reviews businessId={businessId}/>
    </section>
  )
}

export default Business