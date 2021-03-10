import React from 'react'

const BusinessContact = ({business}) => {
  return (
    <section className="business-contact-container">
      <a className="business-contact-container" href="mailto: meyerj.justin@gmail.com">
        <h1 className="business-section-header">Email</h1>
        <p className="business-contact-detail">meyerj.justin@gmail.com</p>
      </a>
      <a className="business-contact-container" href="https://www.linkedin.com/in/justin-meyer-39a915181/">
        <h1 className="business-section-header">LinkedIn</h1>
        <p  className="business-contact-detail">https://www.linkedin.com/in/justin-meyer-39a915181/</p>
      </a>
      <a className="business-contact-container" href="https://github.com/jmeyer90">
        <h1 className="business-section-header">Github</h1>
        <p className="business-contact-detail">https://github.com/jmeyer90</p>
      </a>
    </section>
  )
}

export default BusinessContact