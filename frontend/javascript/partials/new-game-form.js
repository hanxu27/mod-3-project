document.querySelector('Body').innerHTML += `
  <div hidden id="new-game-div">
    <form id="new-game-form">
      <div class="form-group">
        <div class='row'>
          <div class="col-md-4">
            <label for="team1">Home Team</label>
            <input type="text" class="form-control" id="team1" placeholder="Enter Team" required>
          </div>
          <div class="col-md-4">
            <label for="team2">Away Team</label>
            <input type="text" class="form-control" id="team2" placeholder="Enter Team" required>
          </div>
          <div class="col-md-4">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" required>
          </div>
        </div>
        <div class='row'>
          <div class="col-md-4">
            <label for="tournament">Tournament</label>
            <input type="text" class="form-control" id="tournament" placeholder="Enter Tournament Name" required>
          </div>
          <div class="col-md-4">
            <label for="match">Match</label>
            <input type="text" class="form-control" id="match" placeholder="Group-A" required>
            <small class="form-text text-muted">Group Stage, Playoffs, Finals</small>
          </div>
          <div class="col-md-4">
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
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg" id="form-sub">Submit</button>
      <button type="button" class="btn btn-danger btn-lg" id="form-back">Cancel</button>
    </form>
    <hr>
  </div>
`