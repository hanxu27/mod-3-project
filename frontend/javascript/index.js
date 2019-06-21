// URLS //
const URL_BASE = 'http://localhost:3000/'
const URL_GAMES = URL_BASE + `games/`
const URL_PLAYERS = URL_BASE + `players/`
const URL_ACTIONS = URL_BASE + `actions/`

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
const footer = document.querySelector('#footer')

// VARIABLES //
let workingLayer = new Konva.Layer()
let stage
let currentGame
let court = new Image()
  // red blue teal purple yellow orange green pink grey lightblue dark green brown]
const playerColors = [[214, 68, 68], [0, 140, 255], [33, 229, 170], [136, 68, 214], [209, 221, 31], [129, 223, 40], [108, 141, 217], [68, 113, 214], [169, 98, 22], [0, 0, 0]]
const playerFooterColor = ["#D64444", "#008CFF", "#21E5AA", "#8844D6", "#D1DD1F", "#81DF28", "#D644D5", "#6C8DD9", "#A96216", "#000000"]


// EVENTS //
document.addEventListener('click', handleClick)
actionForm.addEventListener('submit', findPlayer)
newGameForm.addEventListener('submit', createNewGame)
newPlayerForm.addEventListener('submit', createPlayer)

// INIT //
console.log('=== JS INIT ===')
clearCurrentGame()
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
  else if (e.target.id === 'toggle-color-btn') toggleColorBtn()
  else if (e.target.className === 'player-btn') togglePlayerBtn(e.target)

  else if (e.target.id === 'new-game') newGameDiv.hidden ? showNewGameForm() : hideNewGameForm()
  else if (e.target.id === 'new-player') newPlayerDiv.hidden ? showNewPlayerForm() : hideNewPlayerForm()
  else if (e.target.id === 'player-cancel') hideNewPlayerForm()
  else if (e.target.id === 'form-back') hideNewGameForm(e)
}

// FOR NAVBAR LOAD GAMES //
function fetchGames() {
  loadGame.innerHTML = ''
  fetch(URL_GAMES)
    .then(res => res.json())
    .then(games => games.forEach(gameToString))
}

function getGameTitle(game) {
  return `${game.date} ${game.tournament} ${game.match} ${game.game} ${game.team1} vs ${game.team2}`
}

function gameToString(game) {
  let link = document.createElement('a')
  link.className = "dropdown-item"
  link.href = "#"
  link.innerText = getGameTitle(game)
  link.addEventListener('click', (e) => loadGameInfo(game.id, link.innerText, game.team1, game.team2))
  loadGame.append(link)
}

function loadGameInfo(id, title, team1, team2) {
  clearCurrentGame()
  currentGame.id = parseInt(id)
  currentGame.title = title
  currentGame.team1.name = team1
  currentGame.team2.name = team2
  teamBtn.innerText = currentGame.team1.name

  fetchGameActions(1)
  fetchGameActions(2)
  fetchGamePlayers(1)
  fetchGamePlayers(2)

  document.querySelector('.modal-body').innerText = currentGame.title
  // $('#load-modal').modal('show')
  renderActions()
  actionBar.hidden = false
}

// AFTER LOAD GAME SELECTED FETCH ACTIONS FROM THAT GAME// 
function fetchGameActions(team_num) {
  return fetch(URL_GAMES + `${currentGame.id}/team/${team_num}/actions`)
    .then(resp => resp.json())
    .then(actions => populateActionArrays(actions, `team${team_num}`))
}

function populateActionArrays(actions, team) {
  actions.forEach(action => {
    if (action.actionType === 'serve') currentGame[team].serves.push(action)
    else if (action.actionType === 'spike') currentGame[team].spikes.push(action)
  })
}

function fetchGamePlayers(team_num) {
  return fetch(URL_GAMES + `${currentGame.id}/team/${team_num}/players`)
    .then(resp => resp.json())
    .then(players => players.forEach(player => currentGame[`team${team_num}`].players.push(player)))
}

function toggleTeamBtn() {
  teamBtn.innerText = teamBtn.innerText === currentGame.team1.name ? currentGame.team2.name : currentGame.team1.name
  renderActions()
}

function toggleActionBtn() {
  switch(actionBtn.innerText) {
    case 'Serves':
      actionBtn.innerText = 'Passes'
      break;
    case 'Passes':
      actionBtn.innerText = 'Spikes'
      break;
    case 'Spikes':
      actionBtn.innerText = 'Serves'
      break;
  }
  renderActions()
}

function toggleColorBtn() {
  colorBtn.innerText = colorBtn.innerText === 'Color: By Team' ? 'Color: By Player' : 'Color: By Team'
  // clear players in footer //
  footer.querySelector('#team1-players').innerHTML = ''
  footer.querySelector('#team2-players').innerHTML = ''
  renderActions()
}

function togglePlayerBtn(button) {
  if(button.innerText === 'ALL')
    renderActions()
  else
    renderActions(button.dataset.playerId)
}

function renderActions(id=null) {
  clearActions()

  workingLayer = new Konva.Layer()
  let layer = new Konva.Layer()
  let team_num = currentGame.team1.name === teamBtn.innerText ? 'team1' : 'team2'

  if (colorBtn.innerText === 'Color: By Player') {
    footer.querySelector('#team2-players').innerHTML = ''
    footer.querySelector('#team1-players').innerHTML = ''
    // iterate over players //
    let i = 0
    footer.querySelector(`#${team_num}-players`).innerHTML += `<button data-player-id="all" class="player-btn">ALL</button>`
    currentGame[team_num].players.forEach(player => {
      // only draw actions that matches player //
      currentGame[team_num][actionBtn.innerText.toLowerCase()].forEach(action => {
        if ( (player.id === action.player_id && id === null) || (player.id === action.player_id && id == player.id) )
          drawArrow(layer, action.start_x, action.start_y, action.end_x, action.end_y, chooseColor(action, team_num, player.number, playerColors[i][0], playerColors[i][1], playerColors[i][2]))
      })
      // add players to footer //
      footer.querySelector(`#${team_num}-players`).innerHTML += `<button data-player-id="${player.id}" class="player-btn" style="color: ${playerFooterColor[i]}">${player.number}</button>`
      i++
    })
  }
  else
    currentGame[team_num][actionBtn.innerText.toLowerCase()].forEach(action => drawArrow(layer, action.start_x, action.start_y, action.end_x, action.end_y, chooseColor(action)))

  stage.add(layer)
}

function chooseColor(action, team_num = false, playerNumber = false, r = 0, g = 255, b = 0) {
  if (colorBtn.innerText === 'Color: By Team') {
    if (action.outcome === 'point') return "#44D648"
    else if (action.outcome === 'error') return "#D64444"
    else return "#4461D6"
  } else {
    if (action.outcome === 'point') {
      const adj = 100
      r + adj > 255 ? r = 255 : r += adj
      g + adj > 255 ? g = 255 : g += adj
      b + adj > 255 ? b = 255 : b += adj
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

// function renderPlayerActions(id, team) {
//   clearActions()
//   workingLayer = new Konva.Layer()
//   let layer = new Konva.Layer()

//   currentGame[team][actionBtn.innerText.toLowerCase()].forEach(action => {
//     if(action.player_id == id)
//       layer.add(drawArrow(action.start_x, action.start_y, action.end_x, action.end_y, chooseColor(action)))
//   })
//   stage.add(layer)
// }

function clearActions() {
  let layers = stage.children
  const max = layers.length - 1
  for (let k = max; k > 0; k--)
    layers[k].remove()
}

function clearCurrentGame() {
  currentGame = {
    id: 0,
    title: '',
    team1: {
      name: '',
      players: [],
      serves: [],
      passes: [],
      spikes: []
    },
    team2: {
      name: '',
      players: [],
      serves: [],
      passes: [],
      spikes: []
    }
  }
}
