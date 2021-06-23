import React from 'react'

const Filter = ({categories}) => {
  return (
    <section>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx} >{category}</li>
        ))}
      </ul>
    </section>
  )
}

export default Filter