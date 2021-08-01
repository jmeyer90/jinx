json.extract! business, 
  :id, 
  :name, 
  :address, 
  :lng, 
  :lat,
  :operation_hours,
  :main_review_id,
  :main_reviewer_id,
  :average_rating,
  :attr_types,
  :attrs,
  :operating_days,
  :num_reviews

json.image_url url_for(business.main_image)

