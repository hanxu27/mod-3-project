# frozen_string_literal: true

class Player < ApplicationRecord
  has_many :actions
  has_many :games, through: :actions

  def selectAction(actionType = nil, outcome = nil)
    if actionType && outcome
      actions.select { |a| a.actionType == actionType && a.outcome == outcome }
    elsif actionType
      actions.select { |a| a.actionType == actionType }
    elsif outcome
      actions.select { |a| a.outcome == outcome }
    end
  end
end
