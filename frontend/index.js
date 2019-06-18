document.addEventListener('DOMContentLoaded', () => {

	let canvasTag = document.getElementById('canvas')
	// canvasTag.width = 2000;
	// canvasTag.height = 1000;

	const xOffset = canvasTag.getBoundingClientRect().x
	const yOffset = canvasTag.getBoundingClientRect().y

	let canvas = new createjs.Stage("canvas");


	canvasTag.addEventListener('mousedown', startArrow)
	canvasTag.addEventListener("mouseup", function(e){ canvas.onmousemove = null });

	function startArrow(e) {
		

		canvas.onmousemove = function(e) {
			console.log('moving...')
    }

		console.log(canvas)
		console.log(e.clientX)
    let rect = new createjs.Shape();
    rect.graphics.beginFill('red');
    rect.graphics.drawRect(e.clientX-xOffset,e.clientY-yOffset, 10, 50,180);
    rect.graphics.endFill();


    canvas.addChild(rect);
    canvas.update();
	}







	// END //
})
