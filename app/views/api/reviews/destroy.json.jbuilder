json.reviewId @review.id

json.user do
  json.partial! "api/users/user", user: @user
end

json.business do
  json.partial! "api/businesses/business", business: @business
end