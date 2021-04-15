Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources(:users, except: [:new, :edit])
    resource(:session, only: [:create, :destroy, :show])
    resources(:albums)
  end

  root to: "static_pages#root"

end

=begin
  api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
                          POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
                 api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
                          PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
                          PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
                          DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
              api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
                          DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
                          POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
               api_albums GET    /api/albums(.:format)                                                                    api/albums#index {:format=>:json}
                          POST   /api/albums(.:format)                                                                    api/albums#create {:format=>:json}
            new_api_album GET    /api/albums/new(.:format)                                                                api/albums#new {:format=>:json}
           edit_api_album GET    /api/albums/:id/edit(.:format)                                                           api/albums#edit {:format=>:json}
                api_album GET    /api/albums/:id(.:format)                                                                api/albums#show {:format=>:json}
                          PATCH  /api/albums/:id(.:format)                                                                api/albums#update {:format=>:json}
                          PUT    /api/albums/:id(.:format)                                                                api/albums#update {:format=>:json}
                          DELETE /api/albums/:id(.:format)                                                                api/albums#destroy {:format=>:json}
                     root GET    /                                                                                        static_pages#root
       rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
       rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
     rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create
=end
