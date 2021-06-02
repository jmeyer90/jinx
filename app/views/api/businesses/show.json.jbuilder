json.partial! "api/businesses/business", business: @business

json.reviews @reviews do |review|

  json.set! review.id do
    json.partial! "api/reviews/review", review: @review
  end

end

json.users @reviews do |review|

  json.set! review.user.id do
    json.id review.user.id
    json.f_name review.user.f_name
    json.l_name review.user.l_name
  end

end