Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :games, only: [:index, :create]
  resources :actions, only: [:create]
  resources :players, only: [:create]

  get 'games/:id/gamehash', to: 'games#get_game_hash'
end
