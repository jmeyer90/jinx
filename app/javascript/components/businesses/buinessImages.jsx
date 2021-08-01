import React from 'react'

const BusinessImages = ({business}) => {
  return (
    <ul className="business-img-container">
      {business.image_urls.map(image_url => 
        <img
          className="business-img-index"
          alt="image from user review"
          src={`${image_url}`}
        />
      )}
    </ul>
  )
}

export default BusinessImages