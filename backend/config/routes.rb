# frozen_string_literal: true

Rails.application.routes.draw do
  resources :actions
  resources :players
  resources :games

  get 'games/:id/actions', to: 'games#actions'
  get 'games/:id/serves', to: 'games#serves'
  get 'games/:id/aces', to: 'games#aces'
  get 'games/:id/nonaces', to: 'games#nonaces'
  get 'games/:id/spikes', to: 'games#spikes'
  get 'games/:id/kills', to: 'games#kills'
  get 'games/:id/nonkills', to: 'games#nonkills'

  get 'games/:id/players', to: 'games#players'
  get 'games/:gameId/players/:id/serves', to: 'games#player_serves'
  get 'games/:gameId/players/:id/aces', to: 'games#player_aces'
  get 'games/:gameId/players/:id/nonaces', to: 'games#player_nonaces'
  get 'games/:gameId/players/:id/spikes', to: 'games#player_spikes'
  get 'games/:gameId/players/:id/kills', to: 'games#player_kills'
  get 'games/:gameId/players/:id/nonkills', to: 'games#player_nonkills'
  get 'games/:gameId/players/:id/serve_errors', to: 'games#player_serve_errors'
  get 'games/:gameId/players/:id/spike_errors', to: 'games#player_spike_errors'

  get 'games/:gameId/team/:id/serves', to: 'games#team_serves'
  get 'games/:gameId/team/:id/aces', to: 'games#team_aces'
  get 'games/:gameId/team/:id/spikes', to: 'games#team_spikes'
  get 'games/:gameId/team/:id/kills', to: 'games#team_kills'

  get 'players/:id/serves', to: 'players#serves'
  get 'players/:id/aces', to: 'players#aces'
  get 'players/:id/nonaces', to: 'players#nonaces'
  get 'players/:id/spikes', to: 'players#spikes'
  get 'players/:id/kills', to: 'players#kills'
  get 'players/:id/nonkills', to: 'players#nonkills'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
