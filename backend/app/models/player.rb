class Player < ApplicationRecord
  has_many :actions
  has_many :games, through: :actions
end
