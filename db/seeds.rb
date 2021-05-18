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





