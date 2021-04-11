class Api::SessionsController < ApplicationController
     def new
        @user = User.new()
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if !@user
           render json: ["Invalid username/password combination"], status: 401
         else 
            sign_in!(@user)
            render "api/users/show"
        end
    end

   def destroy
       if signed_in?()
         sign_out!()
      else 
          render json: ["No current user is signed in"], status: 401
       end
   end

end
