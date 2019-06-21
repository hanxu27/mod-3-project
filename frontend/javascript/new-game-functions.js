function hideNewGameForm() {
  newGameDiv.hidden = true
  newGameForm.reset()
}

function showNewGameForm() {
  newGameDiv.hidden = false
  let today = new Date()
  today = today.toISOString()
  date.value = today.split('T')[0]
}

function createNewGame(e) {
  e.preventDefault()
  const t1 = newGameForm.querySelector('#team1').value
  const t2 = newGameForm.querySelector('#team2').value
  const da = newGameForm.querySelector('#date').value
  const tour = newGameForm.querySelector('#tournament').value
  const ma = newGameForm.querySelector('#match').value
  const ga = newGameForm.querySelector('#game').value
  let newGame = { team1: t1, team2: t2, date: da, tournament: tour, match: ma, game: ga }
  fetch(URL_GAMES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ game: newGame })
  })
    .then(res => res.json())
    .then(game => {
      hideNewGameForm()
      gameToString(game)
      loadGameInfo(game.id, getGameTitle(game), game.team1, game.team2)
    })
}