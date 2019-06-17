# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.destroy_all
Player.destroy_all
Action.destroy_all

g1 = Game.new(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 1, score: '25-21')
g2 = Game.new(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 2, score: '20-25')
g3 = Game.new(team1: 'red', team2: 'blue', date: DateTime.now, tournament: 'AAU', match: 'group A', game: 3, score: '15-11')
# g4 = Game.new(team1: 'triangle', team2: 'square', date: DateTime.now, tournament: 'AAU', match: 'group C', game: 1, score: 25-18)

mp1 = Player.new(name: Faker::Name.name, number: 1, team: 'red', position: 'OH')
mp2 = Player.new(name: Faker::Name.name, number: 2, team: 'red', position: 'S')
mp3 = Player.new(name: Faker::Name.name, number: 3, team: 'red', position: 'MB')

# mp4 = Player.new(name: Faker::Name.name, number: 4, team: 'red', position: 'OH')
# my5 = Player.new(name: Faker::Name.name, number: 5, team: 'red', position: 'RS')
# my6 = Player.new(name: Faker::Name.name, number: 31, team: 'red', position: 'DS')
# mp11 = Player.new(name: Faker::Name.name, number: 1, team: 'triangle', position: 'OH')
# mp12 = Player.new(name: Faker::Name.name, number: 2, team: 'triangle', position: 'S')
# mp13 = Player.new(name: Faker::Name.name, number: 3, team: 'triangle', position: 'MB')
# mp14 = Player.new(name: Faker::Name.name, number: 4, team: 'triangle', position: 'OH')
# my15 = Player.new(name: Faker::Name.name, number: 5, team: 'triangle', position: 'RS')
# my16 = Player.new(name: Faker::Name.name, number: 31, team: 'triangle', position: 'DS')

p1 = Player.new(number: 3, team: 'blue')
p2 = Player.new(number: 11, team: 'blue')
p3 = Player.new(number: 48, team: 'blue')
# p4 = Player.new(number: 23, team: 'blue')
# p5 = Player.new(number: 18, team: 'blue')
# p6 = Player.new(number: 82, team: 'blue')

# p11 = Player.new(number: 8, team: 'square')
# p12 = Player.new(number: 2, team: 'square')
# p13 = Player.new(number: 9, team: 'square')
# p14 = Player.new(number: 13, team: 'square')
# p15 = Player.new(number: 5, team: 'square')
# p16 = Player.new(number: 11, team: 'square')

# action actionType
se = 'serve'
sp = 'spike'
# action outcome
pa = 'pass'
po = 'point'
er = 'error'

game = g1
player = mp1
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))

game = g1
player = mp2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))

game = g1
player = mp3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))

game = g1
player = p1
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))

game = g1
player = p2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))

game = g1
player = p3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g2
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
game = g3
sx = 0
sy = 0
ex = 10
ey = 600
Action.new(game: game, player: player, actionType: se, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: se, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
sx = 10
sy = 400
ex = 100
ey = 600
Action.new(game: game, player: player, actionType: sp, outcome: pa, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: po, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
Action.new(game: game, player: player, actionType: sp, outcome: er, start_x: sx + Faker::Number.between(-30, 30), start_y: sy + Faker::Number.between(-15, 15), end_x: ex + Faker::Number.between(-30, 30), end_y: ey + Faker::Number.between(-15, 15))
