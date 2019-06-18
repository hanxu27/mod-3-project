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

//=============================================================================================================

// HTML ELEMENTS //
const form = document.getElementById('form')
const actionBar = document.getElementById('action-bar')
let active_action = actionBar.firstElementChild.firstElementChild.firstElementChild
let canvasDiv // global definition

let stage = new Konva.Stage({
  container: 'konva-container',
  width: 1000,
  height: 700
})

// VARIABLES //
let first_click = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0
let working_layer = new Konva.Layer()

// EVENTS //
document.addEventListener('click', handleClick)
stage.addEventListener('click', handleStageClick)
form.addEventListener('submit', createAction)

// MAIN
console.log('=== JS START ===')
// Konva.pixelRatio = 1;
let court = new Image();
court.src = 'assets/vb-court.png';
court.onload = () => {
  renderCourt()
  canvasDiv = document.getElementById('konva-container').firstElementChild
}

// ============================== FUNCTION DEFINITIONS ============================== //

function handleClick(e) {
  console.log(stage)

  if(e.target.className === 'nav-link') showActions(e.target)
  // else if (e.target.id === 'new-game') newGame()
  // else if (e.target.id === 'form-sub') createGame()
  // else if (e.target.id === 'form-back') newOrEdit()
}

function showActions(action) {
  let layers = stage.children
  const max = layers.length-1
  for(let k = max; k > 0; k--)
    layers[k].remove()

  let layer = new Konva.Layer()

  if(action.innerText === 'Serves')
    serves.forEach(serve => layer.add(drawArrow(serve.start_x, serve.start_y, serve.end_x, serve.end_y)) )
  else if(action.innerText === 'Spikes') 
    spikes.forEach(spike => layer.add(drawArrow(spike.start_x, spike.start_y, spike.end_x, spike.end_y)) )

  active_action.className = 'nav-link'
  action.className = 'nav-link active'
  active_action = action
  working_layer = new Konva.Layer()
  stage.add(layer)
}

function handleStageClick(e) {
  if(first_click) {
    if(form.hidden === false) {
      form.hidden = true
      form.reset()
      div.lastElementChild.remove()
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
    working_layer.add( drawArrow(startX, startY, endX, endY) )
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

function drawArrow(startX, startY, endX, endY, color='black') {
  return new Konva.Arrow({
    points: [startX, startY, endX, endY],
    pointerLength: 10,
    pointerWidth: 10,
    fill: color,
    stroke: color,
    strokeWidth: 5
  })
}

function newOrEdit() {
  formDiv.innerHTML = `
  <h1 class="page-header text-justify">Pick from options<h1>
  <button class="btn-success btn-lg" id="new-game">New Game</button>
  <button class="btn-info btn-lg" id="view-game">View Game</button>
  `
}

function newGame() {
  formDiv.innerHTML = `
  <form>
          <div class="form-group">
            <label for="team1">Home Team</label>
            <input type="text" class="form-control" id="team1" placeholder="Enter Team" required>
          </div>
          <div class="form-group">
            <label for="team2">Away Team</label>
            <input type="text" class="form-control" id="team2" placeholder="Enter Team" required>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input type="datetime-local" class="form-control" id="date" required>
          </div>
          <div class="form-group">
            <label for="tournament">Tournament</label>
            <input type="text" class="form-control" id="tournament" placeholder="Enter Tournament Name" required>
          </div>
          <div class="form-group">
            <label for="match">Match</label>
            <input type="text" class="form-control" id="match" placeholder="Group-A" required>
            <small class="form-text text-muted">Group Stage, Playoffs, Finals</small>
          </div>
          <div class="form-group">
            <label for="match">Game</label>
            <select class="form-control" id="game">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <small class="form-text text-muted">Set #</small>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" id="form-sub">Submit</button> 
          <button class="btn-danger btn-lg" id="form-back">Back</button>
        </form>`
}
