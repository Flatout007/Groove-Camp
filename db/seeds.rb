# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

nico = User.create(username:'Nico Touches the Walls', password:'123456', artist_check: true, bio:'Nico Touches the Walls was a Japanese rock band formed in 2004. The band members were: Mitsumura Tatsuya, Sakakura Shingo, Furumura Daisuke & Tsushima Shotaro. In the same year, they won the Lotte Prize at the Yamaha Teen Music Festival.')
lisa = User.create(username:'LiSA', password:'123456', artist_check: true, bio:'Risa Oribe, better known by her stage name LiSA, is a Japanese singer, songwriter and lyricist from Seki, Gifu, signed to Sacra Music under Sony Music Artists. After aspiring to become a musician early in life, she started her musical career as the vocalist of the indie band Chucky.')
demo = User.create(username:'demo', password:'123456', artist_check: false, bio:'')

album1 = Album.create(title: 'Diver-EP', artist_id: 10)
album2 = Album.create(title: 'launcher', artist_id: 11)


song1 = Song.create(title: 'diver',artist_id: nico.id, album_id:album1.id)
song2 = Song.create(title: 'rising hope', artist_id: lisa.id, album_id:album2.id)

file1 = open('https://groovecamp-seed.s3.us-east-2.amazonaws.com/Diver.mp3')
song1.audio.attach(io: file1, filename: 'Diver.mp3')

file2 = open('https://groovecamp-seed.s3.us-east-2.amazonaws.com/Rising+Hope.mp3')
song2.audio.attach(io: file2, filename: 'Rising Hope.mp3')




