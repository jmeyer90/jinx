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

export const fetchReviews = businessId =>(
  $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "GET"
  })
);

export const fetchReview = (businessId, reviewId) => (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews/${reviewId}`,
    method: "GET"
  })
);

export const createReview = (businessId, review) => {
  return (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "POST",
    data: { review }
  })
)}

export const updateReview = (businessId, reviewId, review)  => {
  return(
    $.ajax({
      url: `/api/businesses/${businessId}/reviews/${reviewId}`,
      method: "PATCH",
      data: { review }
    })
  )
}

export const deleteReview = (reviewId) =>(
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
)