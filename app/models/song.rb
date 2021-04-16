class Song < ApplicationRecord
    validates(:title, presence: true )
    validates(:artist_id, presence: true)

    belongs_to(
        :artist,
        foreign_key: :artist_id,
        class_name: 'User'
    )

    belongs_to(
        :album,
        foreign_key: :album_id,
        class_name: 'Album'
    )

end
