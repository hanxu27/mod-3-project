document.addEventListener('DOMContentLoaded', () => {
	// HTML ELEMENTS
	const canvasTag = document.getElementById('canvas')
	var canvas = new createjs.Stage("canvas");

	// VARIABLES
	const xOffset = canvasTag.getBoundingClientRect().x
	const yOffset = canvasTag.getBoundingClientRect().y

	let starting_click = true

	let startX = 0
	let startY = 0

	let endX = 0
	let endY = 0

	// MAIN
	// canvasTag.addEventListener('click', handleCourtClick)

	//											//
	// FUNCTION DEFINITIONS //
	//											//
	function handleCourtClick(e) {
		if(starting_click) {
			starting_click = !starting_click
			startX = e.clientX// - xOffset
			startY = e.clientY// - yOffset
		}
		else {
			starting_click = !starting_click
			endX = e.clientX// - xOffset
			endY = e.clientY// - yOffset
			log_coords()
			paintArrow()
		}
	}

	function log_coords() {
		console.log('====================')
		console.log('startX = ', startX)
		console.log('startY = ', startY)
		console.log('endX = ', endX)
		console.log('endY = ', endY)
		console.log('====================')
	}

	function paintArrow() {
		//
	}










	// END //
})
