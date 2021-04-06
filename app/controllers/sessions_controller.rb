class SessionsController < ApplicationController
    def new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if !@user 
            flash[:errors] = ['invalid username or password']
            render(:new)
         else redirect_to(user_url(@user.id))
        end
    end

    def destroy
        if signed_in?()
            sign_out()
        end

        redirect_to(new_session_url)
    end
end
