import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

const SessionForm = ({formDetails}) => {
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors.sessionErrors)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const signUpFields = () => {
    if (formDetails.formType != "sign-up") return null

    return (
      <>
        <section className="session-name-section">
          <label className="session-label">
            <input
              className="session-input"
              type="f_name" 
              placeholder="First Name" 
              value={fName} 
              onChange={e => setFName(e.target.value)} 
            />
          </label>

          <label className="session-label">
            <input
              className="session-input"
              type="l_name" 
              placeholder="Last Name" 
              value={lName} 
              onChange={e => setLName(e.target.value)} 
            />
          </label>
        </section>

        <label className="session-label">
          <input
            className="session-input"
            type="integer" 
            placeholder="Zip Code" 
            value={zipCode} 
            onChange={e => setZipCode(e.target.value)} 
          />
        </label>

        <input type="file" onChange={ e => handleImage(e)}/>
        {displayImagePreview()}
      </>
    )
  }

  const handleImage = (e) => {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
      setImage(file)
      setImageUrl(fileReader.result)
    }

    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let user
      
    if (formDetails.formType == "sign-up") {
      user = new FormData()
      user.append("user[email]", email)
      user.append("user[password]", password)
      user.append("user[f_name]", fName)
      user.append("user[l_name]", lName)
      user.append("user[zip_code]", zipCode)
      user.append("user[profile_image]", image)
    } else {
      user = {}
      user.email = email
      user.password = password
    }

    dispatch(formDetails.action(user))
  }

  const displayImagePreview = () => (
    imageUrl ?
      <img src={imageUrl} alt="upload-photo-preview" />
      : null
  )

  const buttonText = () => (
    formDetails.formType == "sign-up" ? 
      "Sign Up"
      : "Log In"
  )

  const modalClassName = () => (
    formDetails.modal ? "login-modal-form" : ""
  )

  return (
    <form className={`session-form ${modalClassName()}`}
      onSubmit={(e) => handleSubmit(e)}>
      {formDetails.modal ? 
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <p key={idx} className="error">{error}</p>
          ))}
        </ul>
        : null
      }
      <label className="session-label">
        <input 
          className="session-input"
          type="email" 
          placeholder="Email" 
          value={ email } 
          onChange={ e => setEmail(e.target.value) } 
        />
      </label>
      {signUpFields()}
      <label className="session-label">
        <input
          className="session-input"
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value) } 
        />
      </label>
      <input className="session-submit" type="submit" value={buttonText()} />
    </form>
  )
}

export default SessionForm