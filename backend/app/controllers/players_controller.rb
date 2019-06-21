# frozen_string_literal: true

class PlayersController < ApplicationController
  def index
    @players = Player.all
    render json: @players, status: :ok
  end

  def show
    @player = Player.find(params[:id])
    render json: @player, satus: :ok
  end

  def create
    @player = Player.new(s_params)
    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @player = Player.find(params[:id])
    if @player.update
      render json: @player, status: created
    else
      render json: @player.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @player = Player.find(params[:id])
    @actions = @player.actions
    @actions.destroy_all
    @player.destroy
    render json: @player, status: :ok
  end

  def serves
    @player = Player.find(params[:id])
    render json: @player.selectAction('serve', nil), status: :ok
  end

  def aces
    @player = Player.find(params[:id])
    render json: @player.selectAction('serve', 'point'), status: :ok
  end

  def nonaces
    @player = Player.find(params[:id])
    @output = @player.selectAction('serve', 'recieved')
    @output += @player.selectAction('serve', 'error')
    render json: @output, status: :ok
  end

  def spikes
    @player = Player.find(params[:id])
    render json: @player.selectAction('spike', nil), status: :ok
  end

  def kills
    @player = Player.find(params[:id])
    render json: @player.selectAction('serve', 'point'), status: :ok
  end

  def nonkills
    @player = Player.find(params[:id])
    @output = @player.selectAction('spike', 'recieved')
    @output += @player.selectAction('spike', 'error')
    render json: @output, status: :ok
  end

  private

  def s_params
    params.require(:player).permit(:name, :number, :team, :position)
  end
end
