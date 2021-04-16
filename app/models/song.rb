class Song < ApplicationRecord
    validates(:title, presence: true )
    validates(:artist_id, presence: true)

    has_one_attached :audio

    belongs_to(
        :artist,
        foreign_key: :artist_id,
        class_name: 'User',
        optional: true
    )

    belongs_to(
        :album,
        foreign_key: :album_id,
        class_name: 'Album',
        optional: true
    )

end
