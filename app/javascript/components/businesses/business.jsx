import React from 'react'
import BusinessHeader from './businessHeader'
import BusinessImages from './buinessImages'
import BusinessDetails from './businessDetails'
import AvgBusinessRating from '../reviews/avgBusinessRating'
import Map from '../map/map'
import Reviews from '../reviews/reviews'

// load business and associated reviews
// only listen to reviews slice of state

const Business = () => {
  return (
    <section>
      <BusinessHeader />
      <BusinessImages />
      <AvgBusinessRating />
      <Map />
      <BusinessDetails />
      <Reviews />
    </section>
  )
}

export default Business