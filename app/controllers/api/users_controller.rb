class Api::UsersController < ApplicationController

    def create
        
        @user = User.new(params.require(:user).permit(:username, :password, :artist_check, :photo))
      
        if @user.save === false 
            render json: @user.errors.full_messages, status: 422
         else
           sign_in!(@user)
           render "api/users/show"
        end

        # private
        
    end


    def index 
        @users = User.all
        render(:index)
    end

    def show 
        @user = User.find(params[:id])
        render "api/users/show"
    end

    def update
      @user = User.find_by(id: params[:id])

      if @user.update(params.require(:user).permit(:photoUrl))
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
end
