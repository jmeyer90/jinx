json.extract! user, :id, :email, :f_name, :l_name, :zip_code

  if user.profile_image.attached?
    json.imageUrl url_for(user.profile_image)
  end