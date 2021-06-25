class Album < ApplicationRecord
    validates(:title, presence: true)
    
    validates(:artist_id, presence: true)

    belongs_to(:artist, foreign_key: :artist_id, class_name: 'User')

    has_many(:songs, foreign_key: :album_id, :dependent => :destroy, class_name: 'Song')
    
    has_one_attached(:photo)

end
