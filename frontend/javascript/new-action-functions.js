// X-AXIS BOUNDS //
const courtBoundLeft  =   50
const courtMidline    =  525
const courtBoundRight = 1000
const spikeZone = [365, 685]
// Y-AXIS BOUNDS //
const courtBoundTop =  35
const courtBoundBot = 515

let firstClick = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0

function handleStageClick(e) {
  if (firstClick) {
    if(!actionForm.hidden)
      cancelArrow()
    else {
      firstClick = !firstClick
      startX = e.offsetX
      startY = e.offsetY
    }
  }
  // SETS END COORDS
  else {
    firstClick = !firstClick
    endX = e.offsetX
    endY = e.offsetY
    workingLayer.add(drawArrow(startX, startY, endX, endY))
    stage.add(workingLayer)
    showActionForm(e)
  }
}

function cancelArrow() {
  actionForm.hidden = true
  actionForm.reset()
  console.log(workingLayer)
  workingLayer.children[workingLayer.children.length - 1].remove()
  stage.add(workingLayer)
}

// SHOWS FORM AT CURSOR
function showActionForm(e) {
  inferActionAndOutcome()
  actionForm.hidden = false
  actionForm.coords.value = `${startX}-${startY}-${endX}-${endY}`
  actionForm.style.top = e.pageY
  actionForm.style.left = e.pageX
}

function findPlayer(e) {
  e.preventDefault()
  let temp_team = currentGame[startX<courtMidline?'team1':'team2']
  let temp_player = temp_team.players.find(p => p.number == actionForm.number.value)

  if(!temp_player) {
    fetch(URL_PLAYERS,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        player: {
          number: actionForm.number.value,
          team: temp_team.name
        }
      })
    })
    .then(resp => resp.json())
    .then(player => {
      temp_team.players.push(player)
      createAction(player.id, temp_team)
    })
  }
  else
    createAction(temp_player.id, temp_team)
}

function createAction(id, team) {
  let newAction = {
    new_action: {
      game_id: currentGame.id,
      player_id: id,
      actionType: actionForm.actionType.value,
      outcome: actionForm.outcome.value,
      start_x: startX,
      start_y: startY,
      end_x: endX,
      end_y: endY
    }
  }

  fetch(URL_ACTIONS,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newAction)
  })
  .then(resp => resp.json())
  .then(action => {
    console.log(action)
    if(action.actionType === 'serve')
      team.serves.push(action)
    else if(action.actionType === 'spike')
      team.spikes.push(action)
    else
      team.passes.push(action)

    actionForm.reset()
    actionForm.hidden = true
  })
}


function inferActionAndOutcome() {
  let ended_on_same_side = (startX < courtMidline && endX < courtMidline) || (startX > courtMidline && endX > courtMidline) 
  // SERVE BLOCK
  if(startX < courtBoundLeft || startX > courtBoundRight) {
    actionForm.actionType.value = 'serve'
    actionForm.outcome.value = ended_on_same_side ? 'error' : 'recieved'
  }
  // PASS BLOCK
  else if(ended_on_same_side) {
    actionForm.actionType.value = 'pass'
    actionForm.outcome.value = 'recieved'
  }
  // SPIKE BLOCK
  else {
    actionForm.actionType.value = 'spike'
    // actionForm.outcome.value = startX < spikeZone[0] || startX > spikeZone[1] ? 'pass' : 'point'
    actionForm.outcome.value = 'recieved'
  }

  // final error check
  if (endX < courtBoundLeft || endX > courtBoundRight || endY < courtBoundTop || endY > courtBoundBot)
    actionForm.outcome.value = 'error'
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