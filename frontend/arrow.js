const form = document.getElementById('form')
form.addEventListener('submit', createAction)
let canvas = document.getElementById('canvas')

let stage = new createjs.Stage("canvas");
stage.canvas.width = 800
stage.canvas.height = 400
console.log(stage.canvas.width)
console.log(stage.canvas.height)
let arrowSize = 5;

function drawArrow(arrow, length, frequency) {
  arrow.graphics.clear().s("red").mt(0,0);
  for (let i=0, l=(length-arrowSize)/frequency; i<l; i++) {
    let p = frequency/4
    
    // Draw the second part of the wave
    arrow.graphics.qt(i*frequency + p*3, 0, i*frequency+p*4, 0);
  }
  
  // Draws the arrow head at the end.
  arrow.graphics.f("red");
  arrow.graphics.dp(length-arrowSize, 0, arrowSize, 3);
}

let current = null;
stage.on("stagemousedown", function(e) {

	// Create a new arrow on stage press
	current = new createjs.Shape().set({x:stage.mouseX, y:stage.mouseY});
  stage.addChild(current);


  current_rectangle = new createjs.Shape().set({x:stage.mouseX, y:stage.mouseY});
  stage.addChild(current_rectangle);
  
  // Update the current arrow on move
  let moveListener = stage.on("stagemousemove", function(e) {
  	// Determine the length between the start and end point using pythagoras
    let w = stage.mouseX - current.x;
    let h = stage.mouseY - current.y;
    let l = Math.sqrt(w*w+h*h);
    
    // Draw the arrow.
    // Math.sqrt on the amplitude and frequency make it scale as it gets larger
    drawArrow(current, l, Math.sqrt(l));
    
    // Rotate to touch the mouse
    current.rotation = Math.atan2(h,w) * 180/Math.PI;
    stage.update();
  });
  
  // Stop the drag
  let upListener = stage.on("stagemouseup", function(e) {
    form.hidden = false
    form.coords.value = `${current.x}-${current.y}-${stage.mouseX}-${stage.mouseY}`
    form.style.top = e.nativeEvent.pageY
    form.style.left = e.nativeEvent.pageX
    console.log(form.coords.value)

		stage.off("stagemousemove", moveListener);
 		stage.off("stagemouseup", upListener);
    current = null;
  });
});

// ----------------------------------------------------------------------------------------


function constructForm() {

}

function createAction(e) {
  e.preventDefault()
  form.hidden = true
  fetch('http://localhost:3000/actions')
}























