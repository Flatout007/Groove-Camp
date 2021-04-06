class UsersController < ApplicationController
     def new
    end

    def create
        @user = User.find_by(params.require(:user).permit(:username, :password))

        if @user.save === false 
            flash[:errors] = ['Something went wrong']
            render(:new)
         else
           redirect_to(users_url())
        end
    end

    def destroy
    end
end
