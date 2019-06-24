# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Action.destroy_all
Game.destroy_all
Player.destroy_all

g1 = Game.create(team1: "United States", team2: "Germany", date: DateTime.now, tournament: 'AAU', match: 'Group A', game: 1, score: '25-21')

mp1 = Player.create(name: Faker::Name.name, number: 14, team: "United States", position: 'OH')
mp2 = Player.create(name: "Han Xu", number: 27, team: "United States", position: 'S')
mp3 = Player.create(name: "Andrew Allen", number: 67, team: "United States", position: 'MB')

p1 = Player.create(number: 39, team: "Germany")
p2 = Player.create(number: 11, team: "Germany")
p3 = Player.create(number: 48, team: "Germany")

# action actionType
se = 'serve'
pa = 'pass'
sp = 'spike'
# action outcome
re = 'received'
po = 'point'
er = 'error'

courtBoundLeft = 30
courtBoundRight = 975
courtBoundTop = 110
courtBoundBot = 975 * 55 / 100
courtMidline = 502


y_var = 175
x_var = 75
# SERVES
game = g1
n = 2

sx = courtBoundLeft - 10
sy = courtBoundTop + 75
ex = courtBoundRight - 200
ey = courtBoundBot - 250

player = mp1
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = mp2

n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = mp3

n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

player = p1
sx = courtBoundRight + 15
sy = courtBoundTop + 500
ex = courtBoundRight - 700
ey = courtBoundBot - 110
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = p2
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = p3
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

# SPIKES
sx = courtMidline - 50
sy = courtBoundTop + 50
ex = courtBoundRight - 100
ey = courtBoundBot - 150

player = mp1
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline - 50
sy = courtBoundTop + (courtBoundBot - courtBoundTop) / 2
ex = courtBoundRight - 100
ey = courtBoundBot - 150

player = mp2
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline - 70
sy = courtBoundBot - 75
ex = courtBoundRight - 250
ey = courtBoundTop + 100

player = mp3
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 50
sy = courtBoundBot - 55
ex = courtBoundLeft - 100
ey = courtBoundTop + 100

player = p1
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 70
sy = courtBoundTop + (courtBoundBot - courtBoundTop) / 2
ex = courtBoundLeft - 50
ey = courtBoundBot - 100

player = p2
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 80
sy = courtBoundTop + 50
ex = courtBoundLeft - 50
ey = courtBoundTop + 50

player = p3
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: re, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end


# PASSES

player = mp1
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end

player = mp2
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end

player = mp3
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtBoundLeft, courtMidline), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtBoundLeft, courtMidline), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end


player = p1
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end

player = p2
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end


player = p3
n.times do
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: re, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
  Action.create(game: game, player: player, actionType: pa, outcome: er, start_x: Faker::Number.between(courtMidline, courtBoundRight), start_y: Faker::Number.between(courtBoundTop, courtBoundBot), end_x: Faker::Number.between(courtMidline, courtBoundRight), end_y: Faker::Number.between(courtBoundTop, courtBoundBot))
end
