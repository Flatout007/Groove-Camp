class Api::AlbumsController < ApplicationController
    def new
    end

    def create
        @album = Album.new(params.require(:album).permit(:title, :artist_id))

        if @album.save === false
            render json: @album.errors.full_messages
         else render "api/albums/show" 
        end
    end

    def index
        @albums = Album.all
        render "api/albums/index"
    end

    def show 
        @album = Album.find(params[:id])
        render 'api/albums/show'
    end

    def update
     @album = Album.find_by(id: params[:id])
      if @album.update(event_params)
       render 'api/albums/show'
     else
      render json: @album.errors.full_messages, status: 422
     end
    end

    def destroy
     @album = Album.find(params[:id])
     
     if @album && @album.destroy 
        render 'api/albums/show'
     end

    end
end
