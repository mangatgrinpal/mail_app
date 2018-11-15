Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }

  
  root 'static_pages#home'
  
  get '/about', to: 'static_pages#about'

  resources :letters
  resources :charges
end
