import React from 'react'
import BusinessHeader from './businessHeader'
import BusinessImages from './buinessImages'
import BusinessDetails from './businessDetails'
import Map from '../map/map'
import Reviews from '../reviews/reviews'

const Business = () => {
  return (
    <section>
      <BusinessHeader />
      <BusinessImages />
      <Map />
      <BusinessDetails />
      <Reviews />
    </section>
  )
}

export default Business