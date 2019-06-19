function handleStageClick(e) {
  if (first_click) {
    if (actionForm.hidden === false) {
      actionForm.hidden = true
      actionForm.reset()
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
    showActionForm(e)
  }
}

function showActionForm(e) {
  actionForm.hidden = false
  actionForm.coords.value = `${startX}-${startY}-${endX}-${endY}`
  actionForm.style.top = e.pageY
  actionForm.style.left = e.pageX
}

function createAction(e) {
  e.preventDefault()
  // fetch here...
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