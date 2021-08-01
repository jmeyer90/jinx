json.image_urls @image_urls

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

json.reviews @reviews do |review|
    json.partial! "api/reviews/review", review: review
end

json.users @reviews do |review|

  json.set! review.user.id do
    json.id review.user.id
    json.f_name review.user.f_name
    json.l_name review.user.l_name
  end

end