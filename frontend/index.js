document.addEventListener('DOMContentLoaded', () => {
	// HTML ELEMENTS

	formDiv = document.querySelector('#form-div')

	// VARIABLES


	// Event Listeners
	document.addEventListener('click', handleClick)

	// MAIN
	newOrEdit()

	// END //
})


//											//
// FUNCTION DEFINITIONS //
//											//
function handleClick(e) {
	if (e.target.id === 'new-game') newGame()
	if (e.target.id === 'form-sub') createGame
	if (e.target.id === 'form-back') newOrEdit()
}
function newOrEdit() {
	formDiv.innerHTML = `
	<h1 class="page-header text-justify">Pick from options<h1>
	<button class="btn-success btn-lg" id="new-game">New Game</button>
	<button class="btn-info btn-lg" id="view-game">View Game</button>
	`
}

function newGame() {
	formDiv.innerHTML = `
	<form>
          <div class="form-group">
            <label for="team1">Home Team</label>
            <input type="text" class="form-control" id="team1" placeholder="Enter Team" required>
          </div>
          <div class="form-group">
            <label for="team2">Away Team</label>
            <input type="text" class="form-control" id="team2" placeholder="Enter Team" required>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input type="datetime-local" class="form-control" id="date" required>
          </div>
          <div class="form-group">
            <label for="tournament">Tournament</label>
            <input type="text" class="form-control" id="tournament" placeholder="Enter Tournament Name" required>
          </div>
          <div class="form-group">
            <label for="match">Match</label>
            <input type="text" class="form-control" id="match" placeholder="Group-A" required>
            <small class="form-text text-muted">Group Stage, Playoffs, Finals</small>
          </div>
          <div class="form-group">
            <label for="match">Game</label>
            <select class="form-control" id="game">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <small class="form-text text-muted">Set #</small>
          </div>
					<button type="submit" class="btn btn-primary btn-lg" id="form-sub">Submit</button> 
					<button class="btn-danger btn-lg" id="form-back">Back</button>
        </form>`
}


