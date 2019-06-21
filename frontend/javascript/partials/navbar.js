document.querySelector('Body').innerHTML += `
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><i class="volleyball ball icon"></i>Vectors</a>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" id="new-game">New Game</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Load Games
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="loadGamesDropdown">
        </div>
      </li>
    </ul>

    <div hidden id="new-player-btn" class="form-inline my-2 my-lg-0">
      <a class="nav-link" href="#" id="new-player">Add New Player</a>
    </div>

  </nav>
`