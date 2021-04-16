




if user.photo.attached? 
    json.extract! user, :id, :username, :bio
    json.photoUrl url_for(user.photo)
 else 
    json.extract! user, :id, :username, :bio
    json.photoUrl nil
end






   









