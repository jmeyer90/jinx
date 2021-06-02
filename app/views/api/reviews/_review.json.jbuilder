json.set! review.id do

  json.extract! review, :id, :user_id, :business_id, :rating, :body
  json.imageUrl url_for(review.image)

end
