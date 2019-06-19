# frozen_string_literal: true

class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :team1
      t.string :team2
      t.date :date
      t.string :tournament
      t.string :match
      t.integer :game
      t.string :score

      t.timestamps
    end
  end
end
