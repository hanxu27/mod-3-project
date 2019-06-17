# frozen_string_literal: true

class GamesController < ApplicationController
  def index
    games = Game.all
    render json: games, status: :ok
  end

  def show
    game = Game.find(params[:id])
    render json: game, satus: :ok
  end
end
