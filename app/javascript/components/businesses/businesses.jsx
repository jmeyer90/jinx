import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BusinessIndexItem from './businessIndexItem'
import { fetchBusinesses } from '../../actions/business_actions'

// if path = '/', load three business
// if path = '/search', load all matching businesses

const Businesses = () => {
  const businesses = useSelector( state => state.entities.businesses )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBusinesses())
  }, [dispatch])
  
  return (
    <ul className="businesses-container">
      {Object.values(businesses).map(business => (
        <BusinessIndexItem key={business.id} business={business}/>
      ))}
    </ul>
  )
}

export default Businesses