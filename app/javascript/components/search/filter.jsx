import React from 'react'

const Filter = ({categories, section}) => {
  const mapCategoryToImage = {}
  mapCategoryToImage["Wand Shops"] = window.wandShop
  mapCategoryToImage["Broomstick Repair"] = window.broomstickRepair
  mapCategoryToImage["Restaurants"] = window.restaurant
  mapCategoryToImage["Curse Removal"] = window.curseRemoval

  const imgIfBusinessType = category => (
    section == "business-type-" ?
      <div className="business-type-img">
        <img className="business-type-img-src" 
          alt="business filter image"
          src={mapCategoryToImage[category]}/>
      </div>
      : null
  )

  const renderCategories = () => (
    categories.map((category, idx) => (
      <div key={idx} className={`${section}filter-item`}>
        {section == "business-type-" ? 
          imgIfBusinessType(category)
          : null
        }
        <p className={`${section}filter-text`}>{category}</p>
      </div>
    ))
  )

  return (
      <ul className="filter-container">
        {renderCategories()}
      </ul>
  )
}

export default Filter