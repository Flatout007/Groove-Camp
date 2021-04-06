class Api::UsersController < ApplicationController
    def new
    end

    def create
        @user = User.new(params.require(:user).permit(:username, :password))

        if @user.save === false 
            render json: @user.errors.full_messages, status: 422
         else
           sign_in!(@user)
           render(:show)
        end
    end
end
