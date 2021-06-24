import React from 'react'

const Filter = ({categories, section}) => {
  const imgIfBusinessType = () => (
    section == "business-type-" ?
      <img className="business-type-img"/>
      : null
  )

  return (
      <ul className="filter-container">
        {categories.map((category, idx) => (
          <div key={idx} className={`${section}filter-item`}>
            {imgIfBusinessType()}
            <p className={`${section}filter-text`}>{category}</p>
          </div>
        ))}
      </ul>
  )
}

export default Filter