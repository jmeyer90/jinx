import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const SessionForm = ({formDetails}) => {
  const dispatch = useDispatch()
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
        <section className="name-section">
          <label className="session-input">
            <input className="user-name" 
              type="f_name" 
              placeholder="First Name" 
              value={fName} 
              onChange={e => setFName(e.target.value)} 
              required />
          </label>

          <label className="session-input">
            <input className="user-name" 
              type="l_name" 
              placeholder="Last Name" 
              value={lName} 
              onChange={e => setLName(e.target.value)} 
              required />
          </label>
        </section>

        <label className="session-input">
          <input 
            type="integer" 
            placeholder="Zip Code" 
            value={zipCode} 
            onChange={e => setZipCode(e.target.value)} 
            required />
        </label>

        {/* <input type="file" onChange={ e => handleImage(e)}/>
        {displayImagePreview()} */}
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
    e.preventDefault
    
    const formData = new FormData()
    formData.append("user[email]", email)
    formData.append("user[password]", password)

    if (formDetails.formType == "sign-up") {
      formData.append("user[f_name]", fName)
      formData.append("user[l_name]", lName)
      formData.append("user[zip_code]", zipCode)
      formData.append("user[profile_image]", image)
    }

    dispatch(formDetails.action(formData))
  }

  const displayImagePreview = () => (
    imageUrl ?
      <img src={imageUrl} alt="upload-photo-preview" />
      : null
  )

  return (
    <div className="session-container">
      <form className="session-form"
        onSubmit={(e) => handleSubmit(e)}>
        <label className="session-input">
          <input 
            type="email" 
            placeholder="Email" 
            value={ email } 
            onChange={ e => setEmail(e.target.value) } 
            required />
        </label>
        {signUpFields()}
        <label className="session-input">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value) } 
            required />
        </label>
        <input className="submit" type="submit" value={formDetails.formType} />
      </form>
      <img className="session-image" src="" alt="Jinx Logo" />
    </div>
  )
}

export default SessionForm