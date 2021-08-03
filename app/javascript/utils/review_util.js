export const POSSIBLE_RATINGS = [1,2,3,4,5];

export const createReviewModalPartial = {
  action: "create",
  modal: true
};

export const createReviewPartial = {
  action: "create",
  modal: false
};

export const editReviewPartial = {
  action: "edit",
  modal: false
};

export const fetchReviews = businessId =>{
  debugger
  return (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "GET"
  })
)};

export const fetchReview = (businessId, reviewId) => {
  debugger
  return (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews/${reviewId}`,
    method: "GET"
  })
)};

export const createReview = (businessId, formData) => {
  debugger
  return (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  })
)}

export const updateReview = (businessId, reviewId, formData)  => {
  debugger
  return(
    $.ajax({
      url: `/api/businesses/${businessId}/reviews/${reviewId}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const deleteReview = (reviewId) =>(
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
)