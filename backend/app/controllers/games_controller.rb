# frozen_string_literal: true

class GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games, status: :ok
  end

  def show
    @game = Game.find(params[:id])
    render json: @game, satus: :ok
  end

  def create
    @game = Game.new(s_params)
    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @game = Game.find(params[:id])
    if @game.update
      render json: @game, status: created
    else
      render json: @game.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @game = Game.find(params[:id])
    @actions = @game.actions
    @actions.destroy_all
    @game.destroy
    render json: @game, status: :ok
  end

  def actions
    @game = Game.find(params[:id])
    @actions = @game.actions
    render json: @actions, status: :ok
  end

  def players
    @game = Game.find(params[:id])
    @players = @game.players.uniq
    render json: @players, status: :ok
  end

  def serves
  end

  def aces
  end

  def nonAces
  end

  def spikes
  end

  def kills
  end

  def nonKills
  end

  def playerActions
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    @actions = @player.actions.select { |a| a.game == @game }
    render json: @actions, status: :ok
  end

  def playerServes; end

  def playerAces; end

  def playerNonAces; end

  def playerSpikes; end

  def playerKills; end

  def playerNonKills; end



  private

  def s_params
    params.require(:game).permit(:team1, :team2, :date, :tournament, :match, :game, :score)
  end
end
