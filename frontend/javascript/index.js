// URLS //
const URL_BASE = 'http://localhost:3000/'
const URL_GAMES = URL_BASE + `games`
const URL_PLAYERS = URL_BASE + `players`

// HTML ELEMENTS //
const actionForm = document.getElementById('action-form')
const actionBar = document.getElementById('action-bar')
const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')
const loadGame = document.querySelector('#loadGamesDropdown')
const newPlayerDiv = document.querySelector('#new-player-div')
const newPlayerForm = document.querySelector('#new-player-form')

const servesBtn = document.getElementById('serves-btn')
const spikesBtn = document.getElementById('spikes-btn')
let active_action = spikesBtn

// VARIABLES //
let currentGameId = 0
let currentTeam1 = ''
let currentTeam2 = ''
let currentPlayers = { team1: [], team2: [] }
let serves = []
let spikes = []
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
  // console.log('(', e.offsetX, ',', e.offsetY, ')')

  if (e.target.tagName === 'CANVAS') handleStageClick(e)
  else if (e.target.parentElement.id === 'action-bar') renderActions(e.target)
  else if (e.target.id === 'new-game') newGameDiv.hidden ? showNewGameForm() : hideNewGameForm()
  else if (e.target.id === 'new-player') newPlayerDiv.hidden ? showNewPlayerForm() : hideNewPlayerform()
  else if (e.target.id === 'player-cancel') hideNewPlayerForm()
  else if (e.target.id === 'form-back') hideNewGameForm(e)
}

// FOR NAVBAR LOAD GAMES //
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

// AFTER LOAD GAME SELECTED FETCH ACTIONS FROM THAT GAME// 
function fetchGameActions(e) {
  const game_url = URL_GAMES + `/${e.target.dataset.gameId}/actions`
  const players_url = URL_GAMES + `/${e.target.dataset.gameId}/players`
  serves = []
  spikes = []
  fetch(game_url)
    .then(res => res.json())
    .then(populateLocalArrays)
  fetch(players_url)
}

function populateLocalArrays(actions) {
  actions.forEach(action => {
    if (action.actionType === 'serve') serves.push(action)
    else if (action.actionType === 'spike') spikes.push(action)
  })
  renderActions(servesBtn)
}

function renderActions(button) {
  if (active_action.innerText === button.innerText) console.log('action already selected')
  else {
    let layers = stage.children
    const max = layers.length - 1
    for (let k = max; k > 0; k--)
      layers[k].remove()

    working_layer = new Konva.Layer()
    let layer = new Konva.Layer()

    if (button.innerText === 'Serves')
      serves.forEach(serve => layer.add(drawArrow(serve.start_x, serve.start_y, serve.end_x, serve.end_y)))
    else if (button.innerText === 'Spikes')
      spikes.forEach(spike => layer.add(drawArrow(spike.start_x, spike.start_y, spike.end_x, spike.end_y)))

    stage.add(layer)

    // CHANGE ACTIVE_ACTION TO UNSELECTED
    active_action = button
  }
}