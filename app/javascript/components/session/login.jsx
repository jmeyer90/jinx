import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import {LOGIN} from '../../utils/sessionFormUtils'
import { useSelector } from 'react-redux'

const Login = () => {
  const errors = useSelector(state => state.errors.sessionErrors)

  const disclamer = "By logging in, you agree to solemnly swear you are up to no good"

  return (
    <section className="session-container">
      <div className="session-details">
        <h1 className="session-title">Log In to Jinx</h1>
        {SignUpLink("-top")}
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <p key={idx} className="error">{error}</p>
          ))}
        </ul>
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