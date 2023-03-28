Rails.application.routes.draw do
  resources :users
  resources :speakers
  resources :sponsors
  resources :attendees
  resources :events
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
