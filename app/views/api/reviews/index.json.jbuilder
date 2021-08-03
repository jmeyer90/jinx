json.reviews do

  json.array! @reviews do |review|

    json.partial! "api/reviews/review", review: review

  end

end

json.users do 

  json.array! @users do |user|

    json.set! user.id do

      json.partial! "api/users/user", user: user

    end

  end

end