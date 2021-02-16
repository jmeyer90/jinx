import { func } from 'prop-types'
import React from 'react'
import SessionForm from './sessionForm'
import {LOGIN} from '../../utils/sessionFormUtils'

const Login = () => {
  const disclamer = "By logging in, you agree to solemnly swear you are up to no good"

  return (
    <section>
      <h1>Login</h1>
      {SignUpLink("top")}
      <SessionForm details={LOGIN}/>
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