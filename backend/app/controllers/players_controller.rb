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

  def playerServes; end

  def playerAces; end

  def playerNonAces; end

  def playerSpikes; end

  def playerKills; end

  def playerNonKills; end

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

  private

  def s_params
    params.require(:player).permit(:name, :number, :team, :position)
  end
end
