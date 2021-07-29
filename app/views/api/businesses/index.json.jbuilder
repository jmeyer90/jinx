json.businesses do

  json.array! @businesses do |business|

    json.set! business.id do

    json.partial! "api/businesses/business", business: business
    
    end
    
  end

end