import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createReview, updateReview } from '../../actions/review_actions';
import { POSSIBLE_RATINGS } from '../../utils/review_util'
import { REVIEW_MODAL_ACTION } from "../../reducers/ui/uiReducer"

const ReviewForm = ({action, review, setEdit, modal}) => {
  const dispatch = useDispatch()
  const { businessId } = useParams()
  const errors = useSelector(state => state.errors.reviewErrors)

  const [defaultBody, defaultReview, defaultImage ] = review ? 
    [review.body, review.rating, review.imageUrl] 
    : ["", 5, null]
  
  const [body, setBody] = useState(defaultBody)
  const [rating, setRating] = useState(defaultReview)
  const [image, setImage] = useState(defaultImage)
  const [imageUrl, setImageUrl] = useState(defaultImage)
  
  const editClassName = action == "edit" ? "-edit" : ""

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("review[body]", body)
    formData.append("review[rating]", rating)
    formData.append("review[image]", image)

    if (action == "create") {
      dispatch(createReview(businessId, formData))
        .then((reviewAction )=> {
          if(modal && reviewAction.review) dispatch(REVIEW_MODAL_ACTION)
        })
      
    } else {
      const reviewId = review.id
      dispatch(updateReview(businessId, reviewId, formData))
        .then(() => setEdit(false))
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
      <img 
        className={`review-image-preview${editClassName}`}
        src={imageUrl} 
        alt="upload-photo-preview" />
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

  const formButtons = () => {
    if (action == "create") {
      return (
        <button className="review-form-button">Check-In</button>
      )
    } else {
      return (
        <span className="edit-buttons-container">
          <button 
            className={`review-form-button${editClassName}`}
          >
            Check-In
          </button>
          <div 
            className={`review-form-button${editClassName}`}
            onClick={() => setEdit(false)}
          >
            Cancel Edit
          </div>
        </span>
      )
    }
  }

  return (
    <form className={`review-form${editClassName}`} onSubmit={e => handleSubmit(e) }>

      <ul className="errors-container">
        {errors.map((error, idx) => (
          <p key={idx} className="error">{error}</p>
        ))}
      </ul>
      
      <section className={`review-form-input-fields${editClassName}`}>
        <section className={`review-form-radio-section${editClassName}`}>
          <ul className="review-form-radio-ul">{radioButtons()}</ul>
          <p className="review-form-subtitle">Select your rating</p>
        </section>

        <section className={`review-form-data${editClassName}`}>
          <input className={`review-form-image-upload${editClassName}`} type="file"
            onChange={ e => handleImage(e)}/>
          {displayImagePreview()}

          <textarea
            className={`review-form-body${editClassName}`}
            name="review[body]" 
            placeholder="By golly, what a joyfull occassion! The dancing chocolates were superb and such a wonder to behold. And what a pleasure it was to be served by such fantastic staff!" 
            value={body} 
            onChange={ e => setBody(e.target.value) }/>
          </section>
      </section>

      {formButtons()}
    </form>
  )
}

export default ReviewForm