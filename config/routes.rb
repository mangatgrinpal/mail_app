Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }

  
  root 'static_pages#home'
  
  resources :letters
  resources :charges
end
