# frozen_string_literal: true

class Game < ApplicationRecord
  has_many :actions
  has_many :players, through: :actions

  def selectAction(actionType)
    actions.select 
  end

  def selectOutcome(outcome); end
end
