json.businesses do

  @businesses.each do |business|

    json.set! business.id do

    json.partial! "api/businesses/business", business: business
    
    end
    
  end

end

json.reviews do

  @businesses.each do |business|

    json.set! business.main_review.id do

      json.extract! business.main_review, :id, :body, :rating, :business_id

      json.user_id business.main_review.user.id

    end

  end

end

json.users do

  @businesses.each do |business|

    json.set! business.main_reviewer.id do
      json.f_name business.main_reviewer.f_name
      json.l_name business.main_reviewer.l_name
    end

  end

end