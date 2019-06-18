newGameDiv = document.querySelector('#new-game-div')

document.addEventListener('DOMContentLoaded', () => {
  // HTML ELEMENTS

  // VARIABLES


  // Event Listeners
  document.addEventListener('click', handleClick)

  // MAIN
  // newOrEdit()

  // END //
})


//											//
// FUNCTION DEFINITIONS //
//											//
function handleClick(e) {
  if (e.target.id === 'new-game') newGame()
  if (e.target.id === 'form-sub') createGame
  if (e.target.id === 'form-back') cancelNew()
}

function cancelNew() {
  newGameDiv.hidden = true
  console.log("cancelNew");
}

function newGame() {
  newGameDiv.hidden = false
  console.log("newGame");
}


