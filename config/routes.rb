Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  get 'undefined', to: 'catch#show'

  namespace :api, default: { format: :json } do

    resources :users, only: [ :create, :show ]

    resource :session, only: [ :create, :destroy ]

    resources :businesses, only: [ :index, :show ] do

      resources :reviews, only: [ :index, :show, :create, :update]

      get 'search_load', on: :collection

      get 'search_results', on: :collection

    end

    resources :reviews, only: :destroy 
    
  end
end
