import { func } from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import {LOGIN} from '../../utils/sessionFormUtils'

const Login = () => {
  const disclamer = "By logging in, you agree to solemnly swear you are up to no good"

  return (
    <section className="session-container">
      <div className="session-details">
        <h1 className="session-title">Log In to Jinx</h1>
        {SignUpLink("-top")}
        <SessionForm formDetails={LOGIN}/>
        <p className="session-text">{disclamer}</p>
        {SignUpLink("")}
      </div>
      <img className="session-image" src={window.circleLogo} alt="Jinx Logo" />
    </section>
  )
}

function SignUpLink(placement){
  const linkHeader = "New to Jinx?"

  return (
    <div className={`session-link-container${placement}`}>
      <p className="session-link-header">{linkHeader}</p>
      <Link className="session-link" to="/signup">Sign Up</Link>
    </div>
  )
} 

export default Login