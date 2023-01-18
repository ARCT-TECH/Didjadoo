Rails.application.routes.draw do
  resources :tasks
  # get 'users/index'
  # get 'users/show'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end