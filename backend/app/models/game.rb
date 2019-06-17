# frozen_string_literal: true

class Game < ApplicationRecord
  has_many :actions
  has_many :players, through: :actions
end
