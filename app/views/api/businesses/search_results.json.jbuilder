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

json.business_attributes do

  @businesses.each do |business|

    business.business_attributes.each do |business_attribute|
      json.set! business_attribute.id do
        json.id business_attribute.id
        json.attribute_id business_attribute.attribute_item.id
        json.business_id business_attribute.business.id
      end
    end

  end

end

json.attrs do

  @businesses.each do |business|

    business.attrs.each do |attr|
      json.set! attr.id do
        json.id attr.id
        json.attribute_type attr.attribute_type
        json.name attr.name
      end
    end

  end

end