var stage = new createjs.Stage("canvas");

function drawArrow(arrow, length, frequency) {
  arrow.graphics.clear().s("red").mt(0,0);
  var arrowSize = 3;
  for (var i=0, l=(length-arrowSize)/frequency; i<l; i++) {
    var p = frequency/4, breakAfter = false, 
    	a = 0;
      
    // More fun line amplitude
    // a = Math.pow(amplitude, 0.5/l)*i;
    
    // Prevent the line from being longer than the arrow
    // Adjusts the period to fit.
    if (i*frequency + p*2 > length-arrowSize) {
    	p = (length-arrowSize*1.5 - i*frequency) / 2;
      breakAfter = true;
    }
    
    // Draw the first part of the wave
    // arrow.graphics.qt(i*frequency + p, a, i*frequency+p*2, 0);
    // if (breakAfter) { break; } // Break if it would be too long
    
    // // Adjust the period if the second part is too long
    if (i*frequency + p*4 > length-arrowSize) {
    	p = (length-arrowSize*1.5 - i*frequency) / 4; // 1.5 because its a triangle
    }
    
    // Draw the second part of the wave
    arrow.graphics.qt(i*frequency + p*3, 0, i*frequency+p*4, 0);
  }
  
  // Draw the arrow head at the end.
  arrow.graphics.f("red");
  arrow.graphics.dp(length-arrowSize, 0, arrowSize, 3);
}

var current = null;
stage.on("stagemousedown", function(e) {

	// Create a new arrow on stage press
	current = new createjs.Shape().set({x:stage.mouseX, y:stage.mouseY});
  stage.addChild(current);
  
  // Update the current arrow on move
  var moveListener = stage.on("stagemousemove", function(e) {
  	// Determine the length between the start and end point using pythagoras
    var w = stage.mouseX - current.x;
    var h = stage.mouseY - current.y;
    var l = Math.sqrt(w*w+h*h);
    
    // Draw the arrow.
    // Math.sqrt on the amplitude and frequency make it scale as it gets larger
    drawArrow(current, l, Math.sqrt(l));
    
    // Rotate to touch the mouse
    current.rotation = Math.atan2(h,w) * 180/Math.PI;
    stage.update();
  });
  
  // Stop the drag
  var upListener = stage.on("stagemouseup", function() {
		stage.off("stagemousemove", moveListener);
 		stage.off("stagemouseup", upListener);
    console.log(stage.mouseX)
    console.log(current)
    current = null;
  });
});
