import React from 'react'
import { useLocation } from 'react-router-dom'

import SessionFormSignUpFields from './sessionFormSignUpFields'

const SessionForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault
  
    dispatch(createReview(businessId, email, password))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <input type="email" placeholder="Email" value={ email } onChange={ e => setEmail(e.target.value) } required />
      </label>
        {/* <SessionFormSignUpFields /> */}
      <label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value) } required />
      </label>
      <input className="submit" type="submit" value={this.props.formType} />
    </form>
    
  )
}

export default SessionForm