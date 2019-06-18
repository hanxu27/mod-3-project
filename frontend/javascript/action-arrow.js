// HTML ELEMENTS
const form = document.getElementById('form')
let stage = new Konva.Stage({
  container: 'konva-container',
  width: 1000,
  height: 700
})

// VARIABLES
let first_click = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0

// EVENTS
stage.addEventListener('click', handleStageClick)
form.addEventListener('submit', createAction)

// MAIN
// Konva.pixelRatio = 1;
let court = new Image();
court.src = 'assets/vb-court.png';
court.onload = () => {
  renderCourt()
  const div = document.getElementById('konva-container').firstElementChild
}

//                      //
// FUNCTION DEFINITIONS //
//                      //
function handleStageClick(e) {
  // console.log(e.offsetY)
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

function drawArrow(startX, startY, endX, endY) {
  let layer = new Konva.Layer()
  let arrow = new Konva.Arrow({
    // x: -78,
    // y: -58,
    points: [startX, startY, endX, endY],
    pointerLength: 10,
    pointerWidth: 10,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 5
  })
  layer.add(arrow)
  stage.add(layer)
}
