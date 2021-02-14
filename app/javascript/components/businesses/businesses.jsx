import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BusinessIndexItem from './businessIndexItem'
import { fetchBusinesses } from '../../actions/business_actions'

// if path = '/', load three business
// if path = '/search', load all matching businesses

const Businesses = () => {
  const businesses = useSelector( state => state.businesses )
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(fetchBusinesses())
  }, [dispatch])

  return (
    <ul className="businesses-container">
      <BusinessIndexItem />
    </ul>
  )
}

export default Businesses