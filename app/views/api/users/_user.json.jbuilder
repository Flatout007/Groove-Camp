




if user.photo.attached? 
    json.extract! user, :id, :username, :bio
    json.photo url_for(user.photo)
 else 
    json.extract! user, :id, :username, :bio
    json.photo nil
end






   









