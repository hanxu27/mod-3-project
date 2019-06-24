class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games, status: :ok
  end

  # def show
  #   @game = Game.find(params[:id])
  #   render json: @game, satus: :ok
  # end

  def create
    @game = Game.new(s_params)
    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors.full_messages, status: :unprocessable_entity
    end
  end

  # def update
  #   @game = Game.find(params[:id])
  #   if @game.update
  #     render json: @game, status: created
  #   else
  #     render json: @game.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @game = Game.find(params[:id])
  #   @actions = @game.actions
  #   @actions.destroy_all
  #   @game.destroy
  #   render json: @game, status: :ok
  # end

  def get_game_hash
    @game = Game.find(params[:id])
    render json: @game.game_hash, status: :ok
  end
  
  private

  def s_params
    params.require(:game).permit(:team1, :team2, :date, :tournament, :match, :game, :score)
  end
end
