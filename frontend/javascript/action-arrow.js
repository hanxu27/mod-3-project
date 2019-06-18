// VARIABLES
let stage = new Konva.Stage({
  container: 'konva-container',
  width: 1000,
  height: 700
})
const div = document.getElementById('konva-container').firstElementChild
const form = document.getElementById('form')
let first_click = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0

// EVENTS
stage.addEventListener('click', handleStageClick)
form.addEventListener('submit', createAction)

// MAIN
let court = new Image();
court.src = 'assets/vb-court.png';
court.onload = () => renderCourt()

//                      //
// FUNCTION DEFINITIONS //
//                      //
function handleStageClick(e) {
  console.log(e.pageX)
  if(first_click) {
    if(form.hidden === false) {
      form.hidden = true
      form.reset()
      div.lastElementChild.remove()
    }
    else {
      first_click = !first_click
      startX = e.pageX
      startY = e.pageY
    }
  }
  else {
    first_click = !first_click
    endX = e.pageX
    endY = e.pageY
    drawArrow(startX, startY, endX, endY)
    showForm(e)
  }
}

function showForm(e) {
  form.hidden = false
  form.coords.value = `${startX}-${startY}-${endX}-${endY}`
  form.style.top = e.clientY
  form.style.left = e.clientX
}

function createAction() {

}

function renderCourt() {
  let layer = new Konva.Layer()
  let img = new Konva.Image({ image: court })
  // add the shape to the layer
  layer.add(img)
  // add the layer to the stage
  stage.add(layer)
}

function drawArrow(startX, startY, endX, endY) {
  let layer = new Konva.Layer()
  let arrow = new Konva.Arrow({
    x: -78,
    y: -58,
    points: [startX, startY, endX, endY],
    pointerLength: 10,
    pointerWidth: 10,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 5
  })
  // add the shape to the layer
  layer.add(arrow)
  // add the layer to the stage
  stage.add(layer)
}
