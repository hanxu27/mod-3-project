
// URLS //
const URL_BASE = 'http://localhost:3000/'
const URL_GAMES = URL_BASE + `games`
const URL_PLAYERS = URL_BASE + `players`

// HTML ELEMENTS //
const actionForm = document.getElementById('action-form')
const actionBar = document.getElementById('action-bar')
let active_action = actionBar.firstElementChild.firstElementChild.firstElementChild
const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')
const loadGame = document.querySelector('#loadGamesDropdown')
const newPlayerDiv = document.querySelector('#new-player-div')
const newPlayerForm = document.querySelector('#new-player-form')

// VARIABLES //
let working_layer = new Konva.Layer()
let first_click = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0
let stage = new Konva.Stage({
  container: 'konva-container',
  width: 1000,
  height: 700
})

// EVENTS //
document.addEventListener('click', handleClick)
actionForm.addEventListener('submit', createAction)
newGameForm.addEventListener('submit', createNewGame)
newPlayerForm.addEventListener('submit', createPlayer)

// MAIN //
console.log('=== JS START ===')
// Konva.pixelRatio = 1;
fetchGames()
court = new Image();
court.src = 'assets/vb-court.png';
court.onload = () => renderCourt()

// ============================== FUNCTION DEFINITIONS ============================== //

function handleClick(e) {
  // console.log(e.target.tagName)
  
  if(e.target.tagName === 'CANVAS') handleStageClick(e)
  else if (e.target.id === 'new-game') newGameDiv.hidden ? showNewGameForm() : hideNewGameForm()
  else if (e.target.id === 'form-sub') createGame(e)
  else if (e.target.className === 'action nav-link') renderActions(e.target)
  else if (e.target.id === 'new-player') newPlayer()
  else if (e.target.id === 'player-cancel') hideNewPlayerForm()
  else if (e.target.id === 'form-back') hideNewGameForm(e)
}

function newPlayer() {
  newPlayerDiv.hidden = false
}

function hideNewPlayerForm() {
  newPlayerForm.reset()
  newPlayerDiv.hidden = true
}

function createPlayer(e) {
  let newPlayer = { name: newPlayerForm.querySelector('#player-name').value, number: newPlayerForm.querySelector('#player-number').value, team: newPlayerForm.querySelector('#player-team').value, position: newPlayerForm.querySelector('#player-position').value }
  console.log(newPlayer);
  fetch(URL_PLAYERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ player: newPlayer })
  }).then(res => res.json())
    .then(res => {
      hideNewPlayerForm()
      console.log(res)
    })
}

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
  .then(console.log)
  .then(hideNewGameForm())
}

function renderActions(action) {
  let layers = stage.children
  const max = layers.length - 1
  for (let k = max; k > 0; k--)
    layers[k].remove()

  working_layer = new Konva.Layer()
  let layer = new Konva.Layer()

  if (action.innerText === 'Serves')
    serves.forEach(serve => layer.add(drawArrow(serve.start_x, serve.start_y, serve.end_x, serve.end_y)))
  else if (action.innerText === 'Spikes')
    spikes.forEach(spike => layer.add(drawArrow(spike.start_x, spike.start_y, spike.end_x, spike.end_y)))

  stage.add(layer)

  active_action.className = 'action nav-link'
  action.className = 'action nav-link active'
  active_action = action
}

function handleStageClick(e) {
  if (first_click) {
    if (actionForm.hidden === false) {
      actionForm.hidden = true
      actionForm.reset()
      working_layer.children[working_layer.children.length - 1].remove()
      stage.add(working_layer)
    }
    else {
      first_click = !first_click
      startX = e.offsetX
      startY = e.offsetY
    }
  }
  else {
    first_click = !first_click
    endX = e.offsetX
    endY = e.offsetY
    working_layer.add(drawArrow(startX, startY, endX, endY))
    stage.add(working_layer)
    showActionForm(e)
  }
}

function showActionForm(e) {
  console.log(e)
  actionForm.hidden = false
  actionForm.coords.value = `${startX}-${startY}-${endX}-${endY}`
  actionForm.style.top = e.pageY
  actionForm.style.left = e.pageX
}

function createAction(e) {
  e.preventDefault()
  // fetch here...
  actionForm.reset()
  actionForm.hidden = true
}

function renderCourt() {
  let layer = new Konva.Layer()
  let img = new Konva.Image({ image: court })
  layer.add(img)
  stage.add(layer)
}

function drawArrow(startX, startY, endX, endY, color = 'black') {
  return new Konva.Arrow({
    points: [startX, startY, endX, endY],
    pointerLength: 10,
    pointerWidth: 10,
    fill: color,
    stroke: color,
    strokeWidth: 5
  })
}

function fetchGames() {
  fetch(URL_GAMES)
    .then(res => res.json())
    .then(games => games.forEach(gameToString))
}

function gameToString(game) {
  const gameString = `${game.date} ${game.tournament} ${game.match} ${game.game} ${game.team1} vs ${game.team2}`
  let link = document.createElement('a')
  link.className = "dropdown-item"
  link.href = "#"
  link.innerText = gameString
  link.dataset.gameId = game.id
  link.addEventListener('click', fetchGameActions)
  loadGame.append(link)
}

function fetchGameActions(e) {
  const game_url = URL_GAMES + `/${e.target.dataset.gameId}/actions`
  fetch(game_url)
    .then(res => res.json())
    .then(console.log)
}
