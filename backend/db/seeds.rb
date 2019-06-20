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

g1 = Game.create(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 1, score: '25-21')
g2 = Game.create(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 2, score: '20-25')
g3 = Game.create(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 3, score: '15-11')
# g4 = Game.create(team1: 'triangle', team2: 'square', date: DateTime.now, tournament: 'AAU', match: 'group C', game: 1, score: 25-18)

mp1 = Player.create(name: Faker::Name.name, number: 1, team: 'red', position: 'OH')
mp2 = Player.create(name: Faker::Name.name, number: 2, team: 'red', position: 'S')
mp3 = Player.create(name: Faker::Name.name, number: 3, team: 'red', position: 'MB')

# mp4 = Player.create(name: Faker::Name.name, number: 4, team: 'red', position: 'OH')
# my5 = Player.create(name: Faker::Name.name, number: 5, team: 'red', position: 'RS')
# my6 = Player.create(name: Faker::Name.name, number: 31, team: 'red', position: 'DS')
# mp11 = Player.create(name: Faker::Name.name, number: 1, team: 'triangle', position: 'OH')
# mp12 = Player.create(name: Faker::Name.name, number: 2, team: 'triangle', position: 'S')
# mp13 = Player.create(name: Faker::Name.name, number: 3, team: 'triangle', position: 'MB')
# mp14 = Player.create(name: Faker::Name.name, number: 4, team: 'triangle', position: 'OH')
# my15 = Player.create(name: Faker::Name.name, number: 5, team: 'triangle', position: 'RS')
# my16 = Player.create(name: Faker::Name.name, number: 31, team: 'triangle', position: 'DS')

p1 = Player.create(number: 3, team: 'blue')
p2 = Player.create(number: 11, team: 'blue')
p3 = Player.create(number: 48, team: 'blue')
# p4 = Player.create(number: 23, team: 'blue')
# p5 = Player.create(number: 18, team: 'blue')
# p6 = Player.create(number: 82, team: 'blue')

# p11 = Player.create(number: 8, team: 'square')
# p12 = Player.create(number: 2, team: 'square')
# p13 = Player.create(number: 9, team: 'square')
# p14 = Player.create(number: 13, team: 'square')
# p15 = Player.create(number: 5, team: 'square')
# p16 = Player.create(number: 11, team: 'square')

# action actionType
se = 'serve'
sp = 'spike'
# action outcome
pa = 'pass'
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
n = 3

sx = courtBoundLeft - 10
sy = courtBoundTop + 75
ex = courtBoundRight - 200
ey = courtBoundBot - 250

player = mp1
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = mp2

n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = mp3

n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

player = p1
sx = courtBoundRight + 15
sy = courtBoundTop + 500
ex = courtBoundRight - 700
ey = courtBoundBot - 110
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = p2
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: se, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
player = p3
n.times do
  Action.create(game: game, player: player, actionType: se, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
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
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline - 50
sy = courtBoundTop + (courtBoundBot - courtBoundTop) / 2
ex = courtBoundRight - 100
ey = courtBoundBot - 150

player = mp2
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline - 70
sy = courtBoundBot - 75
ex = courtBoundRight - 250
ey = courtBoundTop + 100

player = mp3
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 50
sy = courtBoundBot - 55
ex = courtBoundLeft - 100
ey = courtBoundTop + 100

player = p1
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 70
sy = courtBoundTop + (courtBoundBot - courtBoundTop) / 2
ex = courtBoundLeft - 50
ey = courtBoundBot - 100

player = p2
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end

sx = courtMidline + 80
sy = courtBoundTop + 50
ex = courtBoundLeft - 50
ey = courtBoundTop + 50

player = p3
n.times do
  Action.create(game: game, player: player, actionType: sp, outcome: pa, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: po, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
  Action.create(game: game, player: player, actionType: sp, outcome: er, start_x: sx, start_y: sy + Faker::Number.between(-y_var, y_var), end_x: ex + Faker::Number.between(-x_var, x_var), end_y: ey + Faker::Number.between(-y_var, y_var))
end
