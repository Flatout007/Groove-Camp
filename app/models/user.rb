class User < ApplicationRecord
    validates(:username, presence: true, uniqueness: true)
    validates(:password_digest, presence: true)
    validates(:password, length:{minimum: 6, allow_nil: true})
    validates(:artist_check, inclusion:{ in: [true,false] })

    attr_reader(:password)

    after_initialize(:ensure_session_token!)

    has_one_attached(:photo)
    
    has_many(
        :albums,
        foreign_key: :artist_id,
        class_name: 'Album'
    )

    has_many(:songs,
       foreign_key: :artist_id,
       class_name: 'Song'
    )


    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        if user && BCrypt::Password.new(user.password_digest).is_password?(password)
            return user
         else return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
        
    end

    def reset_session_token!() 
        token = SecureRandom.base64()
        self.session_token = token
        self.save!
        return self.session_token
    end

    def ensure_session_token!() 
        self.session_token ||= SecureRandom.base64()
    end
end
