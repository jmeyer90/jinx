json.review do 
  json.partial! "api/reviews/review", review: @review
end

json.user do
  json.partial! "api/users/user", user: @user
end

json.business do
  json.extract! @business,
  :id, 
  :name, 
  :address, 
  :lng, 
  :lat, 
  :services, 
  :attrs, 
  :operation_hours,
  :main_review_id,
  :main_reviewer_id,
  :average_rating,
  :attr_types,
  :operating_days,
  :num_reviews

  json.image_urls @image_urls
end