# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_16_230554) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "player_id"
    t.string "actionType"
    t.string "outcome"
    t.float "start_x"
    t.float "start_y"
    t.float "end_x"
    t.float "end_y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_actions_on_game_id"
    t.index ["player_id"], name: "index_actions_on_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "team1"
    t.string "team2"
    t.date "date"
    t.string "tournament"
    t.string "match"
    t.integer "game"
    t.string "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.string "team"
    t.string "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "actions", "games"
  add_foreign_key "actions", "players"
end
