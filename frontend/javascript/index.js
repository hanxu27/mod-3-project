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
const URL_GAMES = URL_BASE + `games/`
const URL_PLAYERS = URL_BASE + `players/`

// HTML ELEMENTS //
const actionForm = document.getElementById('action-form')
const actionBar = document.getElementById('action-bar')
const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')
const loadGame = document.querySelector('#loadGamesDropdown')
const newPlayerDiv = document.querySelector('#new-player-div')
const newPlayerForm = document.querySelector('#new-player-form')
const teamBtn = document.getElementById('toggle-team-btn')
const actionBtn = document.getElementById('toggle-action-btn')
const colorBtn = document.getElementById('toggle-color-btn')

// VARIABLES //
let workingLayer = new Konva.Layer()
let stage
let court = new Image()

// EVENTS //
document.addEventListener('click', handleClick)
actionForm.addEventListener('submit', createAction)
newGameForm.addEventListener('submit', createNewGame)
newPlayerForm.addEventListener('submit', createPlayer)

// INIT //
console.log('=== JS INIT ===')
// Konva.pixelRatio = 1;
court.src = 'assets/court.jpg'
court.onload = () => {
  stage = new Konva.Stage({
    container: 'konva-container',
    width: court.width,
    height: court.height
  })
  renderCourt()
}
fetchGames()

// ============================== FUNCTION DEFINITIONS ============================== //

function handleClick(e) {
  // console.log('(', e.offsetX, ',', e.offsetY, ')')

  if (e.target.tagName === 'CANVAS') handleStageClick(e)
  else if (e.target.id === 'toggle-action-btn') toggleActionBtn()
  else if (e.target.id === 'toggle-team-btn') toggleTeamBtn()
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
  link.dataset.team1 = game.team1
  link.dataset.team2 = game.team2

  link.addEventListener('click', loadGameInfo)
  loadGame.append(link)
}

function loadGameInfo(e) {
  currentGame.id = parseInt(e.target.dataset.gameId)
  currentGame.team1.name = e.target.dataset.team1
  currentGame.team2.name = e.target.dataset.team2

  teamBtn.innerText = currentGame.team1.name
  actionBtn.innerText = 'Serves'
  colorBtn.innerText = 'Team'

  fetchGameActions()
  fetchGamePlayers()

  // ASYNC PROBLEMS
  // console.log(currentGame)
  // console.log(teamBtn.innerText)
  // console.log(actionBtn.innerText)
  // renderActions()

  actionBar.hidden = false
}

// AFTER LOAD GAME SELECTED FETCH ACTIONS FROM THAT GAME// 
function fetchGameActions() {

  fetch(URL_GAMES + `${currentGame.id}/team/1/actions`)
    .then(resp => resp.json())
    .then(actions => populateActionArrays(actions, 'team1'))

  fetch(URL_GAMES + `${currentGame.id}/team/2/actions`)
    .then(resp => resp.json())
    .then(actions => populateActionArrays(actions, 'team2'))
}

function populateActionArrays(actions, team) {
  actions.forEach(action => {
    if (action.actionType === 'serve') currentGame[team].serves.push(action)
    else if (action.actionType === 'spike') currentGame[team].spikes.push(action)
  })
}

// ...

function fetchGamePlayers() {

  fetch(URL_GAMES + `${currentGame.id}/team/1/players`)
    .then(resp => resp.json())
    .then(players => players.forEach(player => currentGame['team1'].players.push(player)))

  fetch(URL_GAMES + `${currentGame.id}/team/2/players`)
    .then(resp => resp.json())
    .then(players => players.forEach(player => currentGame['team2'].players.push(player)))
}



function toggleTeamBtn() {
  teamBtn.innerText = teamBtn.innerText === currentGame.team1.name ? currentGame.team2.name : currentGame.team1.name
  renderActions()
}

function toggleActionBtn() {
  actionBtn.innerText = actionBtn.innerText === 'Serves' ? 'Spikes' : 'Serves'
  renderActions()
}

function renderActions() {
  // clears canvas
  let layers = stage.children
  const max = layers.length - 1
  for (let k = max; k > 0; k--)
    layers[k].remove()

  workingLayer = new Konva.Layer()
  let layer = new Konva.Layer()
  let team_num = currentGame.team1.name === teamBtn.innerText ? 'team1' : 'team2'

  if (actionBtn.innerText === 'Serves')
    currentGame[team_num].serves.forEach(serve => layer.add(drawArrow(serve.start_x, serve.start_y, serve.end_x, serve.end_y, chooseColor(team_num, serve))))
  else if (actionBtn.innerText === 'Spikes')
    currentGame[team_num].spikes.forEach(spike => layer.add(drawArrow(spike.start_x, spike.start_y, spike.end_x, spike.end_y, chooseColor(team_num, spike))))

  stage.add(layer)
}

function chooseColor(team, action) {

  if (colorBtn.innerText === 'Team') {

    if (team === 'team1') {
      r = 0
      g = 255
      b = 0
    } else {
      r = 165
      g = 0
      b = 255
    }

    if (action.outcome === 'pass') {
      r + 90 > 255 ? r = 255 : r += 90
      g + 90 > 255 ? g = 255 : g += 90
      b + 90 > 255 ? b = 255 : b += 90
    }
    // else if (action.outcome === 'pass')
    //   0 // do nothing
    else if (action.outcome === 'error') {
      r = Math.round(r *= 0.85)
      g = Math.round(g *= 0.85)
      b = Math.round(b *= 0.85)
    }
    let hr = r.toString(16)
    if (!hr[1]) hr = ["0", hr].join('')
    let hg = g.toString(16)
    if (!hg[1]) hg = ["0", hg].join('')
    let hb = b.toString(16)
    if (!hb[1]) hb = ["0", hb].join('')
    const base_color = "#" + hr + hg + hb

    return base_color
  }
}

function giveColor(color, action) {

}












