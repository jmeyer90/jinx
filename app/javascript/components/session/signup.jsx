import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import { SIGN_UP } from '../../utils/sessionFormUtils'
import { useSelector } from 'react-redux'

const SignUp = () => {
  const errors = useSelector(state => state.errors.usersErrors)

  const greeting = "Connect with the wonderful wizarding world near you."
  const disclamer = "You understand that Jinx may send you owls requesting your help for perilous quests filled with adventure and near certain death."
  const linkHeader = "Already on Jinx?"
  
  return (
    <section className="session-container">
      <div className="session-details">
        <h1 className="session-title">Sign Up for Jinx</h1>
        <p className="session-text">{greeting}</p>
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <p key={idx} className="error">{error}</p>
          ))}
        </ul>
        <SessionForm formDetails={SIGN_UP}/>
        <p className="session-text">{disclamer}</p>
        <div className="session-link-container">
          <p className="session-link-header">{linkHeader}</p>
          <Link className="session-link" to="/login">Log In</Link>
        </div>
      </div>
      <img className="session-image" src={window.circleLogo} alt="Jinx Logo" />
    </section>
  )
}

export default SignUp