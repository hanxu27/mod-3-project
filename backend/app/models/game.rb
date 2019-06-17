# frozen_string_literal: true

class Game < ApplicationRecord
  has_many :actions
  has_many :players, through: :actions

  def selectAction(actionType = nil, outcome = nil)
    if actionType && outcome
      actions.select { |a| a.actionType == actionType && a.outcome == outcome }
    elsif actionType
      actions.select { |a| a.actionType == actionType }
    elsif outcome
      actions.select { |a| a.outcome == outcome }
    end
  end

  def selectPlayer(player, actionType = nil, outcome = nil)
    if actionType && outcome
      actions.select { |a| a.player == player && a.actionType == actionType && a.outcome == outcome }
    elsif actionType
      actions.select { |a| a.player == player && a.actionType == actionType }
    elsif outcome
      actions.select { |a| a.player == player && a.outcome == outcome }
    end
  end

  def selectTeam(team, actionType = nil, outcome = nil)
    if actionType && outcome
      actions.select { |a| a.player.team == team && a.actionType == actionType && a.outcome == outcome }
    elsif actionType
      actions.select { |a| a.player.team == team && a.actionType == actionType }
    elsif outcome
      actions.select { |a| a.player.team == team && a.outcome == outcome }
    end
  end
end
