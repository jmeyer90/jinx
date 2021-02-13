import React from 'react'
import BusinessIndexItem from './businessIndexItem'

// if path = '/', load three business
// if path = '/search', load all matching businesses

const Businesses = () => {
  return (
    <ul>
      <BusinessIndexItem />
    </ul>
  )
}

export default Businesses