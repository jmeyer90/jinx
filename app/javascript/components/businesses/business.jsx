import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessHeader from './businessHeader'
import BusinessImages from './buinessImages'
import BusinessDetails from './businessDetails'
import AvgBusinessRating from '../reviews/avgBusinessRating'
import Map from '../map/map'
import Reviews from '../reviews/reviews'
import { useParams } from 'react-router-dom'
import { fetchBusiness } from '../../actions/business_actions'

// load business and associated reviews
// only listen to reviews slice of state

const Business = () => {
  const dispatch = useDispatch()
  const { businessId } = useParams()
  const business = useSelector( state => state.entities.businesses[businessId] )

  useEffect(() => {
    console.log(`params.businessId: ${businessId}`)
    dispatch(fetchBusiness(businessId))
  }, [dispatch])

  return (
    <section>
      <BusinessHeader business={business}/>
      <BusinessImages businessId={businessId}/>
      <AvgBusinessRating businessId={businessId}/>
      <Map />
      <BusinessDetails business={business}/>
      <Reviews businessId={businessId}/>
    </section>
  )
}

export default Business