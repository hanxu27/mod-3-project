document.querySelector('Body').innerHTML += `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
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
    <div class="form-inline my-2 my-lg-0">
      <a class="nav-link" href="#" id="new-player">Add New Player</a>
    </div>

  </nav>
`

{/* <form class="form-inline my-2 my-lg-0">
<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form> */}