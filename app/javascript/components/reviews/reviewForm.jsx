import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createReview, updateReview } from '../../actions/review_actions';
import { POSSIBLE_RATINGS } from '../../utils/review_util'

const ReviewForm = ({action, modal, review, setEdit}) => {
  const [defaultBody, defaultReview, defaultImage ] = review ? 
    [review.body, review.rating, review.imageUrl] 
    : ["", 5, null]
  const [body, setBody] = useState(defaultBody)
  const [rating, setRating] = useState(defaultReview)
  const [image, setImage] = useState(defaultImage)
  const [imageUrl, setImageUrl] = useState(defaultImage)
  const dispatch = useDispatch()
  const { businessId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("review[body]", body)
    formData.append("review[rating]", rating)
    formData.append("review[image]", image)

    if (action == "create") {
      dispatch(createReview(businessId, formData))
    } else {
      const reviewId = review.id
      dispatch(updateReview(businessId, reviewId, formData))
      setEdit(false)
    }

    setBody("")
    setRating(1)
    setImage(null)
    setImageUrl(null)
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

  const displayImagePreview = () => (
    imageUrl ? 
      <img src={imageUrl} alt="upload-photo-preview" />
      : null
  )

  const radioButtons = () => (
      POSSIBLE_RATINGS.map((possibleRating) => {
        const checked = possibleRating == rating
        return (
          <input className="review-form-radio-button"
            key={possibleRating}
            type='radio'
            name='review[rating]'
            value={possibleRating}
            onChange={e => setRating(e.target.value)} required
            checked={checked} />
        )
      })
  )

  return (
    <form className="review-form" onSubmit={e => handleSubmit(e) }>
      <h1 className="review-form-title">{action}</h1>
      
      <section className="review-form-input-fields">
        <section className="review-form-radio-section">
          <ul className="review-form-radio-ul">{radioButtons()}</ul>
          <p className="review-form-subtitle">Select your rating</p>
        </section>

        <input className="review-form-image-upload" type="file"
          onChange={ e => handleImage(e)}/>
        {displayImagePreview()}

        <textarea
          className="review-form-body"
          name="review[body]" 
          placeholder="By golly, what a joyfull occassion! The dancing choloates were superb and such a wonder to behold. And what a pleasure it was to be served by such fantastic staff." 
          value={body} 
          onChange={ e => setBody(e.target.value) }/>
      </section>

      <button className="review-form-button">Check-In</button>
    </form>
  )
}

export default ReviewForm