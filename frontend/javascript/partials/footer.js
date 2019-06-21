document.querySelector('Body').innerHTML += `
  <footer id="footer" class="bg-light card-footer text-muted fixed-bottom">
    <!-- © Copyright 2020 Fancy Bois, LLC -->

    <div id="action-bar" class="row" hidden>
      <div class="col-3" id="team1-players"></div>

      <button id="toggle-team-btn" class="btn btn-secondary col-2">Teams</button>
      <button id="toggle-action-btn" class="btn btn-success col-2">Serves</button>
      <button id="toggle-color-btn" class="btn btn-warning col-2">Color: By Team</button>

      <div class="col-3" id="team2-players"></div>
    </div>
  </footer>
`