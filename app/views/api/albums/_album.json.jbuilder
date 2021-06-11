 
if(album.photo.attached?)
    json.extract! album, :id, :title, :artist_id
    json.photo url_for(album.photo)
else 
    json.extract! album, :id, :title, :artist_id
    json.photo nil
end