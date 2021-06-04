class Api::SongsController < ApplicationController
    def new
        @songs = Song.new()
    end

    
    def index
        @songs = Song.all

        render "api/songs/index"
    end


    def create
        @song = Song.new(params.require(:song).permit(:title, :artist_id, :album_id, :audio))

        p @song

        if @song.save === false 
            render json: @song.errors.full_messages, status: 422
        else 
            render "api/songs/show" 
        end
    end


    def show
        @songs = Song.find(params[:id])
    end


    def update
        @song = Song.find_by(id: params[:id])
        if @song.update(params.require(:song).permit(:title, :artist_id, :album_id, :audio))
            render 'api/songs/show'
        else
            render json:@song.errors.full_messages, status: 422
        end
    end


    def destroy
     @song = Song.find(params[:id])
     
     if @song && @song.destroy 
        render 'api/songs/show'
     end

    end
end
