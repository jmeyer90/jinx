import React from 'react'
import { useLocation } from 'react-router-dom'

import SessionFormSignUpFields from './sessionFormSignUpFields'

const SessionForm = () => {
  const location = useLocation()

  return (
    <section>
      <p>Session Form Sign Up Fields</p>
      < SessionFormSignUpFields />
    </section>
  )
}

export default SessionForm