json.extract! user, :id, :email, :f_name, :l_name, :zip_code

json.imageUrl url_for(user.profile_image)