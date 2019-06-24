class Game < ApplicationRecord
  has_many :actions
  has_many :players, through: :actions

  def game_hash
    {
      id: id,
      title: %Q[[#{date}] #{tournament} - #{self.match} - Game #{game} - #{team1} vs #{team2}],

      team1: {
        name: team1,
        players: selectTeamPlayer(team1),
        serves: selectTeamActions(team1, 'serve'),
        passes: selectTeamActions(team1, 'pass'),
        spikes: selectTeamActions(team1, 'spike')
      },

      team2: {
        name: team2,
        players: selectTeamPlayer(team2),
        serves: selectTeamActions(team2, 'serve'),
        passes: selectTeamActions(team2, 'pass'),
        spikes: selectTeamActions(team2, 'spike')
      }
    }
  end
  
  def selectTeamPlayer(team)
    players.select { |p| p.team == team }.uniq
  end

  def selectTeamActions(team, actionType=nil, outcome=nil)
    if actionType && outcome
      actions.select { |a| a.player.team == team && a.actionType == actionType && a.outcome == outcome }
    elsif actionType
      actions.select { |a| a.player.team == team && a.actionType == actionType }
    elsif outcome
      actions.select { |a| a.player.team == team && a.outcome == outcome }
    else
      actions.select { |a| a.player.team == team }
    end
  end
end
