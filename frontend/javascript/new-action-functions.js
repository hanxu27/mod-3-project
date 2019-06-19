const courtBoundLeft = 30
const courtBoundRight = 975
const courtBoundTop = 110
const courtBoundBot = 975
const countMidline = 502

function handleStageClick(e) {
  if (first_click) {
    // CANCEL ARROW //
    if (actionForm.hidden === false) {
      actionForm.hidden = true
      actionForm.reset()
      working_layer.children[working_layer.children.length - 1].remove()
      stage.add(working_layer)
    }
    // SET START X,Y //
    else {
      first_click = !first_click
      startX = e.offsetX
      startY = e.offsetY
    }
  }
  // SET END X,Y //
  else {
    first_click = !first_click
    endX = e.offsetX
    endY = e.offsetY
    working_layer.add(drawArrow(startX, startY, endX, endY))
    stage.add(working_layer)
    showActionForm(e)
  }
}

// SHOW FORM AT ENDING POINT //
function showActionForm(e) {
  if (endX < courtBoundLeft || endX > courtBoundRight || endY < courtBoundTop || endY > courtBoundBot)
    actionForm.outcome.value = 'error'
  actionForm.hidden = false
  actionForm.coords.value = `${startX}-${startY}-${endX}-${endY}`
  actionForm.style.top = e.pageY
  actionForm.style.left = e.pageX
}

function createAction(e) {
  e.preventDefault()
  // const newActionType = startX < courtBoundLeft || startX > courtBoundRight ? "serve" : "spike"
  // const pId = 
  // // fetch here...
  // let newAction = {
  //   game_id: currentGameId,
  //   player_id: ?????,
  //   actionType: newActionType,
  //   outcome: actionForm.outcome.value,
  //   start_x: startX,
  //   start_y: startY,
  //   end_x: endX,
  //   end_y: endY
  // }
  console.log(newAction);
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