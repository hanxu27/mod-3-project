# frozen_string_literal: true

class ActionsController < GamesController
  def index
    @actions = Action.all
    render json: @actions, status: :ok
  end

  def show
    @action = Action.find(params[:id])
    render json: @action, satus: :ok
  end

  def create
    @action = Action.new(s_params)
    if @action.save
      render json: @action, status: :created
    else
      render json: @action.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @action = Action.find(params[:id])
    if @action.update
      render json: @action, status: created
    else
      render json: @action.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @action = Action.find(params[:id])
    @actions = @action.actions
    @actions.destroy_all
    @action.destroy
    render json: @action, status: :ok
  end

  private

  def s_params
    params.require(:new_action).permit(:game, :player, :actionType, :outcome, :start_x, :start_y, :end_x, :end_y)
  end
end
