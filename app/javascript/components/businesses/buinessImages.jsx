import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusiness } from '../../actions/business_actions'

const BusinessImages = ({businessId}) => {
  const image_urls = useSelector(state => state.entities.businesses[businessId].image_urls)
  const dispatch = useDispatch()

  if(image_urls){
    if(image_urls.length == 0) dispatch(fetchBusiness(businessId))
  }

  const renderImages = () => (
    image_urls ?
      image_urls.map(image_url => 
        <img
          key={image_url}
          className="business-img-index"
          alt="image from user review"
          src={`${image_url}`}
        />
      )
      : null
  )

  return (
    <ul className="business-img-container">
      {renderImages()}
    </ul>
  )
}

export default BusinessImages