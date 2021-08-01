import React from 'react'

const BusinessImages = ({business}) => {

  const renderImages = () => (
    business.image_urls ?
      business.image_urls.map(image_url => 
        <img
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