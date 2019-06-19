const URL_GAMES = `http://localhost:3000/games`
// HTML ELEMENTS //
const form = document.getElementById('form')
const actionBar = document.getElementById('action-bar')
let active_action = actionBar.firstElementChild.firstElementChild.firstElementChild
const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')

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

document.addEventListener('DOMContentLoaded', () => {
  // EVENTS //
  document.addEventListener('click', handleClick)
  stage.addEventListener('click', handleStageClick)
  form.addEventListener('submit', createAction)
  document.addEventListener('click', handleClick)

  // MAIN //
  console.log('=== JS START ===')
  // Konva.pixelRatio = 1;
  court = new Image();
  court.src = 'assets/vb-court.png';
  court.onload = () => renderCourt()
  
  // SEED DATA //
  let spikes = [
    {
      "id": 1,
      "game_id": 1,
      "player_id": 1,
      "actionType": "serve",
      "outcome": "score",
      "start_x": 400.0,
      "start_y": 400.0,
      "end_x": 600.0,
      "end_y": 540.0,
      "created_at": "2019-06-17T13:14:23.952Z",
      "updated_at": "2019-06-17T13:14:23.952Z"
    },
    {
      "id": 2,
      "game_id": 1,
      "player_id": 1,
      "actionType": "serve",
      "outcome": "score",
      "start_x": 400.0,
      "start_y": 250.0,
      "end_x": 600.0,
      "end_y": 550.0,
      "created_at": "2019-06-17T13:14:23.952Z",
      "updated_at": "2019-06-17T13:14:23.952Z"
    },
  ]
  let serves = [
    {
      "id": 1,
      "game_id": 1,
      "player_id": 1,
      "actionType": "serve",
      "outcome": "pass",
      "start_x": 10.0,
      "start_y": 500.0,
      "end_x": 800.0,
      "end_y": 150.0,
      "created_at": "2019-06-17T13:14:23.952Z",
      "updated_at": "2019-06-17T13:14:23.952Z"
    },
    {
      "id": 2,
      "game_id": 1,
      "player_id": 1,
      "actionType": "serve",
      "outcome": "score",
      "start_x": 10.0,
      "start_y": 250.0,
      "end_x": 600.0,
      "end_y": 300.0,
      "created_at": "2019-06-17T13:14:23.952Z",
      "updated_at": "2019-06-17T13:14:23.952Z"
    },
  ]
  // SEED DATA END //
})

// ============================== FUNCTION DEFINITIONS ============================== //

function handleClick(e) {
  if (e.target.id === 'new-game') newGame()
  if (e.target.id === 'form-sub') createGame(e)
  if (e.target.id === 'form-back') cancelNew()
  if (e.target.className === 'nav-link') showActions(e.target)
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

function showActions(action) {
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

  active_action.className = 'nav-link'
  action.className = 'nav-link active'
  active_action = action
}

function handleStageClick(e) {
  if (first_click) {
    if (form.hidden === false) {
      form.hidden = true
      form.reset()
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
    showForm(e)
  }
}

function showForm(e) {
  form.hidden = false
  form.coords.value = `${startX}-${startY}-${endX}-${endY}`
  form.style.top = e.clientY
  form.style.left = e.clientX
}

function createAction(e) {
  e.preventDefault()
  // fetch here...
  form.reset()
  form.hidden = true
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


