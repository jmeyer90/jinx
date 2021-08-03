import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { executeSearch } from '../../actions/search_actions'

const Filter = ({categories, section}) => {
  const dispatch = useDispatch()
  const history = useHistory()

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

  const handleClick = category => {
    const searchRequest = {}
    let searchCategory = ""

    if (section == "business-type-") {
      searchCategory = "attrs"
      if (category.slice(-1) == "s") {
        category = category.slice(0, -1)
      }
      searchRequest.attrs = category
    } else {
      searchCategory = "neighborhood"
      searchRequest.neighborhood = category
    }

    dispatch(executeSearch(searchRequest))
      .then(() =>
        history.push(`/search?category=${searchCategory}&input=${category}`)
      )
  }

  const renderCategories = () => (
    categories.map((category, idx) => (
      <div key={idx} 
        className={`${section}filter-item`}
        onClick={() => handleClick(category)}>
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