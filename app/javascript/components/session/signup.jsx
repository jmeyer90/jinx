import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import { SIGN_UP } from '../../utils/sessionFormUtils'

const SignUp = () => {
  const greeting = "Connect with the wonderful wizarding world near you."
  const disclamer = "You understand that Jinx may send you owls requesting your help for perilous quests filled with adventure and near certain death."
  const linkHeader = "Already on Jinx?"
  
  return (
    <section className="session-container">
      <div className="session-details">
        <h1 className="session-title">Sign Up for Jinx</h1>
        <p className="session-greeting">{greeting}</p>
        <SessionForm formDetails={SIGN_UP}/>
        <p className="session-disclaimer">{disclamer}</p>
        <div className="session-link-container">
          <p className="session-link-header">{linkHeader}</p>
          <Link className="session-link" to="/login">Log In</Link>
        </div>
      </div>
      <img className="session-image" src="" alt="Jinx Logo" />
    </section>
  )
}

export default SignUp