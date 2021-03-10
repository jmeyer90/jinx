import React from 'react'

const BusinessAttributes = ({business}) => {
  function displayAttrs(attr_type) {
    const attr_names = []

    business.attrs.forEach(attr => {
      if(attr.attribute_type == attr_type) attr_names.push(attr.name);
    });

    return (
      <ul>{attr_names}</ul>
    )
  }

  return (
    <ul>
      <h2>Known For</h2>
      {business.attr_types.map((attr_type) => (
        <li key={attr_type}>
          <h3>{attr_type}</h3>
          {displayAttrs(attr_type)}
        </li>
      ))}
    </ul>
  )
}

export default BusinessAttributes