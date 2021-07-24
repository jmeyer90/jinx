import { func } from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import {LOGIN} from '../../utils/sessionFormUtils'

const Login = () => {
  const disclamer = "By logging in, you agree to solemnly swear you are up to no good"

  return (
    <section className="session-container">
      <h1 className="session-title">Log In to Jinx</h1>
      {SignUpLink("top")}
      <SessionForm formDetails={LOGIN}/>
      <p>{disclamer}</p>
      {SignUpLink("bottom")}
    </section>
  )
}

function SignUpLink(placement){
  const linkTitle = "New to Jinx?"

  return (
    <div className={`${placement}`}>
      {linkTitle}
      <Link to="/signup">Sign Up</Link>
    </div>
  )
} 

export default Login