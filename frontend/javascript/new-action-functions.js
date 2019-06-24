function handleStageClick(e) {
  if (firstClick) {
    if(!actionForm.hidden)
      cancelNewAction()
    else {
      firstClick = !firstClick
      startX = e.offsetX
      startY = e.offsetY
    }
  }
  else {
    firstClick = !firstClick
    endX = e.offsetX
    endY = e.offsetY
    drawArrow(workingLayer, startX, startY, endX, endY)
    stage.add(workingLayer)

    //remove if you want multiple new actions to show at once
    workingLayer = new Konva.Layer()

    showActionForm(e)
  }
}

function cancelNewAction() {
  actionForm.hidden = true
  actionForm.reset()
  stage.children[stage.children.length-1].remove()
  workingLayer = new Konva.Layer()
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
  let team = startX < courtMidline ? 'team1' : 'team2'
  let temp_player = currentGame[team].players.find(p => p.number == actionForm.number.value)

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
          team: currentGame[team].name
        }
      })
    })
    .then(resp => resp.json())
    .then(player => {
      currentGame[team].players.push(player)
      createAction(player.id, team, true)
    })
  }
  else
    createAction(temp_player.id, team)
}

function createAction(id, team, newPlayer=false) {
  //remove if you want multiple new actions to show at once
  if(stage.children.length > 2)
    stage.children[stage.children.length-2].remove()

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

    if(action.actionType === 'serve')
      currentGame[team].serves.push(action)
    else if(action.actionType === 'spike')
      currentGame[team].spikes.push(action)
    else
      currentGame[team].passes.push(action)

    actionForm.reset()
    actionForm.hidden = true

    if(newPlayer && colorBtn.innerText === 'Color: By Player' && teamBtn.innerText === currentGame[team].name )
      renderActions()
  })
}

function inferActionAndOutcome() {
  let ended_on_same_side = (startX < courtMidline && endX < courtMidline) || (startX > courtMidline && endX > courtMidline) 
  // SERVES
  if(startX < courtBoundLeft || startX > courtBoundRight) {
    actionForm.actionType.value = 'serve'
    actionForm.outcome.value = ended_on_same_side ? 'error' : 'received'
  }
  // PASSES
  else if(ended_on_same_side) {
    actionForm.actionType.value = 'pass'
    actionForm.outcome.value = 'received'
  }
  // SPIKES
  else {
    actionForm.actionType.value = 'spike'
    // actionForm.outcome.value = startX < spikeZone[0] || startX > spikeZone[1] ? 'received' : 'point'
    actionForm.outcome.value = 'received'
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

function drawArrow(layer, startX, startY, endX, endY, color='black') {
  layer.add(new Konva.Arrow({
    points: [startX, startY, endX, endY],
    pointerLength: 8,
    pointerWidth: 8,
    fill: color,
    stroke: color,
    strokeWidth: 3
  }))
  layer.add(new Konva.Circle({
    // x: startX < courtMidline ? startX-6 : startX+6,
    x: startX,
    y: startY,
    radius: 6,
    // stroke: color,
    fill: color,
    strokeWidth: 3
  }))
}
