import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const SessionForm = ({formDetails}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [zipCode, setZipCode] = useState("")

  const signUpFields = () => {
    if (formDetails.formType != "sign-up") return null

    return (
      <>
        <section className="name-section">
          <label>
            <input className="user-name" 
              type="f_name" 
              placeholder="First Name" 
              value={fName} 
              onChange={e => setFName(e.target.value)} 
              required />
          </label>
          <label>
            <input className="user-name" 
              type="l_name" 
              placeholder="Last Name" 
              value={lName} 
              onChange={e => setLName(e.target.value)} 
              required />
          </label>
        </section>
        <label>
          <input 
            type="integer" 
            placeholder="Zip Code" 
            value={zipCode} 
            onChange={e => setZipCode(e.target.value)} 
            required />
        </label>
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault
    const user = {
      email: email,
      password: password
    }
    if (formDetails.formType == "sign-up") {
      user["f_name"] = fName
      user["l_name"] = lName
      user["zip_code"] = zipCode
    }
    dispatch(formDetails.action(user))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <input 
          type="email" 
          placeholder="Email" 
          value={ email } 
          onChange={ e => setEmail(e.target.value) } 
          required />
      </label>
      {signUpFields()}
      <label>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value) } 
          required />
      </label>
      <input className="submit" type="submit" value={formDetails.formType} />
    </form>
    
  )
}

export default SessionForm