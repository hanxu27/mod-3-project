Rails.application.routes.draw do
  resources :actions
  resources :players
  resources :games
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
