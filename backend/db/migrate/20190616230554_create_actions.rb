# frozen_string_literal: true

class CreateActions < ActiveRecord::Migration[5.2]
  def change
    create_table :actions do |t|
      t.references :game, foreign_key: true
      t.references :player, foreign_key: true
      t.string :actionType
      t.string :outcome
      t.float :start_x
      t.float :start_y
      t.float :end_x
      t.float :end_y

      t.timestamps
    end
  end
end
