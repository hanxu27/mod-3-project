# frozen_string_literal: true

Rails.application.routes.draw do
  resources :actions
  resources :players
  resources :games
  get 'games/:id/actions', to: 'games#actions'
  get 'games/:id/players', to: 'games#players'
  get 'games/:gameId/players/:id/actions', to: 'games#playerActions'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
