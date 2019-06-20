// X-AXIS BOUNDS //
const courtBoundLeft  =   50
const courtMidline    =  525
const courtBoundRight = 1000
// Y-AXIS BOUNDS //
const courtBoundTop =  35
const courtBoundBot = 515
const spikeZone = [365, 685]

let firstClick = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0

function handleStageClick(e) {
  if (firstClick) {
    // CANCELS ARROW //
    if (!actionForm.hidden) {
      actionForm.hidden = true
      actionForm.reset()
      workingLayer.children[workingLayer.children.length - 1].remove()
      stage.add(workingLayer)
    }
    // SETS START COORDS //
    else {
      firstClick = !firstClick
      startX = e.offsetX
      startY = e.offsetY
    }
  }
  // SETS END COORDS //
  else {
    firstClick = !firstClick
    endX = e.offsetX
    endY = e.offsetY
    workingLayer.add(drawArrow(startX, startY, endX, endY))
    stage.add(workingLayer)
    showActionForm(e)
  }
}

// SHOWS FORM AT CURSOR //
function showActionForm(e) {
  inferActionAndOutcome()
  actionForm.hidden = false
  actionForm.coords.value = `${startX}-${startY}-${endX}-${endY}`
  actionForm.style.top = e.pageY
  actionForm.style.left = e.pageX
}

function createAction(e) {
  e.preventDefault()
  const newActionType = startX < courtBoundLeft || startX > courtBoundRight ? "serve" : "spike"
  console.log(newActionType)
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

function inferActionAndOutcome() {
  let ended_on_same_side = (startX < courtMidline && endX < courtMidline) || (startX > courtMidline && endX > courtMidline) 
  console.log('same side? ', ended_on_same_side)
  // SERVE BLOCK
  if(startX < courtBoundLeft || startX > courtBoundRight) {
    actionForm.actionType.value = 'serve'
    actionForm.outcome.value = ended_on_same_side ? 'error' : 'pass'
  }
  // PASS BLOCK
  else if(ended_on_same_side) {
    actionForm.actionType.value = 'pass'
    actionForm.outcome.value = 'pass'
  }
  // SPIKE BLOCK
  else {
    actionForm.actionType.value = 'spike'
    actionForm.outcome.value = startX < spikeZone[0] || startX > spikeZone[1] ? 'pass' : 'point'
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