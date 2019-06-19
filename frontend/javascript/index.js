const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')
const URL_GAMES = `http://localhost:3000/games`

document.addEventListener('DOMContentLoaded', () => {
  // HTML ELEMENTS

  // VARIABLES


  // Event Listeners
  document.addEventListener('click', handleClick)

  // MAIN

  // END //
})


//											//
// FUNCTION DEFINITIONS //
//											//
function handleClick(e) {
  if (e.target.id === 'new-game') newGame()
  if (e.target.id === 'form-sub') createGame(e)
  if (e.target.id === 'form-back') cancelNew()
}

function cancelNew() {
  newGameDiv.hidden = true
}

function newGame() {
  newGameDiv.hidden = false
  let today = new Date()
  today = today.toISOString()
  date.value = today.split('T')[0]
}

function createGame(e) {
  e.preventDefault()
  const t1 = newGameForm.querySelector('#team1').value
  const t2 = newGameForm.querySelector('#team2').value
  const da = newGameForm.querySelector('#date').value
  const tour = newGameForm.querySelector('#tournament').value
  const ma = newGameForm.querySelector('#match').value
  const ga = newGameForm.querySelector('#game').value
  let newGame = { team1: t1, team2: t2, date: da, tournament: tour, match: ma, game: ga }
  console.log(newGame);
  fetch(URL_GAMES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ game: newGame })
  }).then(res => res.json())
    .then(console.log)
}