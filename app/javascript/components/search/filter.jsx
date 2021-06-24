import React from 'react'

const Filter = ({categories}) => {
  return (
      <ul className="filter-container">
        {categories.map((category, idx) => (
          <p key={idx} className="filter-item">{category}</p>
        ))}
      </ul>
  )
}

export default Filter