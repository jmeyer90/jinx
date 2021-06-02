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

  return (
    <form onSubmit={e => handleSubmit(e) }>
      <h1>{action}</h1>
      {POSSIBLE_RATINGS.map((possibleRating)=> {
        const checked = possibleRating == rating
        return (
          <label key={possibleRating}>
            <input type='radio' name='review[rating]' value={possibleRating}
            onChange={ e => setRating(e.target.value) } required
            checked={checked}/>
          </label>
        )
      })}

      <input type="file" 
        onChange={ e => handleImage(e)}/>
      {displayImagePreview()}

      <input type="text" 
        name="review[body]" 
        placeholder="Write a review" 
        value={body} 
        onChange={ e => setBody(e.target.value) }/>

      <button>Check-In</button>
    </form>
  )
}

export default ReviewForm