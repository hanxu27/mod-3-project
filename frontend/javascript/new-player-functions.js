function showNewPlayerForm() {
  newPlayerDiv.hidden = false
}

function hideNewPlayerForm() {
  newPlayerForm.reset()
  newPlayerDiv.hidden = true
}

function createPlayer(e) {
  e.preventDefault()

  let newPlayer = {
    name: newPlayerForm.querySelector('#player-name').value,
    number: newPlayerForm.querySelector('#player-number').value,
    team: newPlayerForm.querySelector('#player-team').value,
    position: newPlayerForm.querySelector('#player-position').value
  }

  fetch(URL_PLAYERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ player: newPlayer })
  })
  .then(res => res.json())
  .then(player => {
    hideNewPlayerForm()
    currentGame[player.team === currentGame.team1.name ? 'team1' : 'team2'].players.push(player)
    renderActions()
  })
}