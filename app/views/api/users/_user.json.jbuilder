

if user.photo.attached? 
    json.extract! user, :id, :username, :bio, :artist_check
    json.photo url_for(user.photo)
 else 
    json.extract! user, :id, :username, :bio, :artist_check
    json.photo nil
end






   









