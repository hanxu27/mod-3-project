// IT'S NOT HASHKETBALL OKAY? //
let currentGame = {
  id: 0,
  team1: {
    name: '',
    players: [],
    serves: [],
    spikes: []
  },
  team2: {
    name: '',
    players: [],
    serves: [],
    spikes: []
  }
}

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
const actionBtn = document.getElementById('toggle-action-btn')

// VARIABLES //
let currentGameId = 0
let currentTeam1 = ''
let currentTeam2 = ''
let serves = []
let spikes = []
let workingLayer = new Konva.Layer()

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

// INIT //
console.log('=== JS INIT ===')

// Konva.pixelRatio = 1;
court = new Image();
court.src = 'assets/vb-court.png';
court.onload = () => renderCourt()

fetchGames()

// ============================== FUNCTION DEFINITIONS ============================== //

function handleClick(e) {
  // console.log('(', e.offsetX, ',', e.offsetY, ')')

  if (e.target.tagName === 'CANVAS') handleStageClick(e)
  else if (e.target.id === 'toggle-action-btn') toggleActionBtn()
  else if (e.target.id === 'new-game') newGameDiv.hidden ? showNewGameForm() : hideNewGameForm()
  else if (e.target.id === 'new-player') newPlayer()
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
  actionBar.hidden = false
  serves = []
  spikes = []
  let currentGameId = parseInt(e.target.dataset.gameId)

  console.log('Loading Game ID:', currentGameId)

  fetch(URL_GAMES + `/${currentGameId}/actions`)
  .then(res => res.json())
  .then(populateLocalArrays)
}

function populateLocalArrays(actions) {
  actions.forEach(action => {
    if (action.actionType === 'serve') serves.push(action)
    else if (action.actionType === 'spike') spikes.push(action)
  })
  renderActions(actionBtn.innerText)
}

function toggleActionBtn() {
  actionBtn.innerText = actionBtn.innerText === 'Serves' ? 'Spikes' : 'Serves'
  renderActions(actionBtn.innerText)
}

function renderActions(action) {
  console.log(serves)
  let layers = stage.children
  const max = layers.length - 1
  for (let k = max; k > 0; k--)
    layers[k].remove()

  workingLayer = new Konva.Layer()
  let layer = new Konva.Layer()

  if (action === 'Serves')
    serves.forEach(serve => layer.add(drawArrow(serve.start_x, serve.start_y, serve.end_x, serve.end_y)))
  else if (action === 'Spikes')
    spikes.forEach(spike => layer.add(drawArrow(spike.start_x, spike.start_y, spike.end_x, spike.end_y)))

  stage.add(layer)
}