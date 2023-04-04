Rails.application.routes.draw do
  resources :users
  resources :speakers
  resources :sponsors
  resources :attendees
  resources :events
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "users#login"
  get "/users/events", to: "users#get_all_user_events"
  delete '/logout', to: 'users#logout'
  # Defines the root path route ("/")
  # root "articles#index"
end
