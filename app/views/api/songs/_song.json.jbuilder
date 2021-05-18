  

 
if song.audio.attached? 
    json.extract! song, :id, :title, :artist_id, :album_id
    json.audioUrl url_for(song.audio)
else 
    json.extract! song, :id, :title, :artist_id, :album_id
    json.audioUrl nil
end