class Player < ApplicationRecord
  has_many :actions
  has_many :games, through: :actions

  def serves; end

  def aces; end

  def nonAces; end

  def spikes; end

  def kills; end

  def nonKills; end
end
