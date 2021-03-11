import React from 'react'

const BusinessAttributes = ({business}) => {
  function displayAttrs(attr_type) {
    const attr_names = []

    business.attrs.forEach(attr => {
      if(attr.attribute_type == attr_type) attr_names.push(attr.name);
    });

    return (
      <ul className="business-attr-index">{attr_names}</ul>
    )
  }

  return (
    <ul className="business-attrs-container">
      <h2 className="business-section-header">Known For</h2>
      <ul className="business-attrs-section">
        {business.attr_types.map((attr_type) => (
          <li className="business-attr-type-container" key={attr_type}>
            <h3 className="business-section-subheader">{attr_type}</h3>
            {displayAttrs(attr_type)}
          </li>
        ))}
      </ul>
    </ul>
  )
}

export default BusinessAttributes