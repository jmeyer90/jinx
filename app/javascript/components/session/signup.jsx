import React from 'react'
import {Link} from 'react-router-dom'
import SessionForm from './sessionForm'
import { SIGN_UP } from '../../utils/sessionFormUtils'

const SignUp = () => {
  const greeting = "Connect with the wonderful wizarding world near you."
  const disclamer = "You understand that Jinx may send you owls requesting your help for perilous quests filled with adventure and near certain death."
  const linkTitle = "Already on Jinx?"
  
  return (
    <section>
      <p>{greeting}</p>
      <SessionForm formDetails={SIGN_UP}/>
      <p>{disclamer}</p>
      <div>
        {linkTitle}
        <Link to="/login">Log In</Link>
      </div>
    </section>
  )
}

export default SignUp