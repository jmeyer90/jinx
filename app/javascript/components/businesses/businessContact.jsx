import React from 'react'

const BusinessContact = ({business}) => {
  return (
    <section className="business-contact-container">
      <a className="business-contact-index" href="mailto: meyerj.justin@gmail.com">
        <h1 className="business-section-header">Email</h1>
        <p className="business-contact-detail">meyerj.justin@gmail.com</p>
      </a>

      <div className="hor-line"></div>
      <a className="business-contact-index" href="https://www.linkedin.com/in/justin-james-meyer">
        <h1 className="business-section-header">LinkedIn</h1>
        <p  className="business-contact-detail">https://www.linkedin.com/in/justin-james-meyer</p>
      </a>
      <div className="hor-line"></div>
      
      <a className="business-contact-index" href="https://github.com/jmeyer90">
        <h1 className="business-section-header">Github</h1>
        <p className="business-contact-detail">https://github.com/jmeyer90</p>
      </a>
    </section>
  )
}

export default BusinessContact