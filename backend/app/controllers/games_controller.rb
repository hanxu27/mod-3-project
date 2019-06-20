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

  def players
    @game = Game.find(params[:id])
    @players = @game.players.uniq
    render json: @players, status: :ok
  end

  def actions
    @game = Game.find(params[:id])
    @actions = @game.actions
    render json: @actions, status: :ok
  end

  def serves
    @game = Game.find(params[:id])
    render json: @game.selectAction('serve', nil), status: :ok
  end

  def aces
    @game = Game.find(params[:id])
    render json: @game.selectAction('serve', 'point'), status: :ok
  end

  def nonaces
    @game = Game.find(params[:id])
    @output = @game.selectAction('serve', 'pass')
    @output += @game.selectAction('serve', 'error')
    render json: @output, status: :ok
  end

  def spikes
    @game = Game.find(params[:id])
    render json: @game.selectAction('spike', nil), status: :ok
  end

  def kills
    @game = Game.find(params[:id])
    render json: @game.selectAction('spike', 'point'), status: :ok
  end

  def nonkills
    @game = Game.find(params[:id])
    @output = @game.selectAction('spike', 'pass')
    @output += @game.selectAction('spike', 'error')
    render json: @output, status: :ok
  end

  # players

  def player_serves
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'serve', nil), status: :ok
  end

  def player_aces
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'serve', 'point'), status: :ok
  end

  def player_nonaces
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    @output = @game.selectPlayer(@player, 'serve', 'pass')
    @output += @game.selectPlayer(@player, 'serve', 'error')
    render json: @output, status: :ok
  end

  def player_spikes
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'spike', nil), status: :ok
  end

  def player_kills
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'spike', 'point'), status: :ok
  end

  def player_nonkills
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    @output = @game.selectPlayer(@player, 'spike', 'pass')
    @output += @game.selectPlayer(@player, 'spike', 'error')
    render json: @output, status: :ok
  end

  def player_serve_errors
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'serve', 'error'), status: :ok
  end

  def player_spike_errors
    @game = Game.find(params[:gameId])
    @player = Player.find(params[:id])
    render json: @game.selectPlayer(@player, 'spike', 'error'), status: :ok
  end

  # teams

  def team_players
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeamPlayer(@team), status: :ok
  end

  def team_actions
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeam(@team), status: :ok
  end

  def team_serves
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeam(@team, 'serve', nil), status: :ok
  end

  def team_aces
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeam(@team, 'serve', 'point'), status: :ok
  end

  def team_spikes
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeam(@team, 'serve', nil), status: :ok
  end

  def team_kills
    @game = Game.find(params[:gameId])
    @team = params[:id] == '1' ? @game.team1 : @game.team2
    render json: @game.selectTeam(@team, 'serve', nil), status: :ok
  end

  private

  def s_params
    params.require(:game).permit(:team1, :team2, :date, :tournament, :match, :game, :score)
  end
end
