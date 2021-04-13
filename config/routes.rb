Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources(:users, except: [:new, :edit])
    resource(:session, only: [:create, :destroy, :show])
  end

  root to: "static_pages#root"

end

=begin
  
         Prefix Verb   URI Pattern                                                                             
           api_user_index POST   /api/users(.:format)     api/user#create {:format=>:json}
              api_session GET    /api/session(.:format)  api/sessions#show {:format=>:json}
                          DELETE /api/session(.:format)  api/sessions#destroy {:format=>:json}
                          POST   /api/session(.:format)  api/sessions#create {:format=>:json}
                     root GET    /                       static_pages#root
=end
