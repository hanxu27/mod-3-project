document.querySelector('Body').innerHTML += `
	<div hidden id="new-player-div">
    <form id="new-player-form">
      <div class="form-group">
        <div class='row'>
          <div class="col-md-3">
            <label for="player-name">Full Name</label>
            <input type="text" class="form-control" id="player-name" placeholder="First Last" required>
          </div>
          <div class="col-md-3">
            <label for="player-number">Number</label>
            <input type="text" class="form-control" id="player-number" placeholder="Enter Number" required>
          </div>
          <div class="col-md-3">
            <label for="player-team">Team</label>
            <input type="text" class="form-control" id="player-team" placeholder="14-4 Jeff's baddies" required>
          </div>
          <div class="col-md-3">
            <label for="player-position">Position</label>
            <input type="text" class="form-control" id="player-position" placeholder="position" required>
            <small class="form-text text-muted">OH, RS, S, DS, MB</small>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" id="player-sub">Create</button>
        <button type="button" class="btn btn-danger btn-lg" id="player-cancel">Cancel</button>
      </div>
    </form>
  </div>
`