function handleClick(e) {
  // console.log('(', e.offsetX, ',', e.offsetY, ')')

  if (e.target.tagName === 'CANVAS') handleStageClick(e)
  else if (e.target.id === 'toggle-action-btn') toggleActionBtn()
  else if (e.target.id === 'toggle-team-btn') toggleTeamBtn()
  else if (e.target.id === 'toggle-color-btn') toggleColorBtn()
  else if (e.target.className === 'player-btn') togglePlayerBtn(e.target)
  else if (e.target.id === 'new-game') newGameDiv.hidden ? showNewGameForm() : hideNewGameForm()
  else if (e.target.id === 'new-player') newPlayerDiv.hidden ? showNewPlayerForm() : hideNewPlayerForm()
  else if (e.target.id === 'player-cancel') hideNewPlayerForm()
  else if (e.target.id === 'form-back') hideNewGameForm(e)
}

// FOR NAVBAR LOAD GAMES //
function fetchGames() {
  loadGame.innerHTML = ''
  fetch(URL_GAMES)
    .then(res => res.json())
    .then(games => games.forEach(gameToString))
}

function gameToString(game) {
  let link = document.createElement('a')
  link.className = "dropdown-item"
  link.href = "#"
  link.innerText = `[${game.date}] ${game.tournament} - ${game.match} - Game ${game.game} - ${game.team1} vs ${game.team2}`
  link.addEventListener('click', (e) => loadGameInfo(game.id))
  loadGame.append(link)
}

async function loadGameInfo(id, loaded=true) {
  // show interface on (first) game-load
  if(actionBar.hidden) {
    actionBar.hidden = false
    stage.attrs.container.hidden = false
    document.getElementById('footer').hidden = false
    document.getElementById('new-player-btn').hidden = false
    document.querySelector('body').style.background = 'none';
  }

  await fetchGameHash(id)
  // console.log(currentGame)
  teamBtn.innerText = currentGame.team1.name

  document.querySelector('.modal-title').innerText = loaded ? 'Game loaded!' : 'Game saved!'
  document.querySelector('.modal-body').innerText = `You are now viewing:\n ${currentGame.title}`
  $('#load-modal').modal('show')

  renderActions()
}

function fetchGameHash(id) {
  return fetch(URL_GAMES+`/${id}/gamehash`)
  .then(resp => resp.json())
  .then(gamehash => currentGame = gamehash)
}

function toggleTeamBtn() {
  teamBtn.innerText = teamBtn.innerText === currentGame.team1.name ? currentGame.team2.name : currentGame.team1.name
  renderActions()
}

function toggleActionBtn() {
  switch(actionBtn.innerText) {
    case 'Serves':
      actionBtn.innerText = 'Passes'
      break;
    case 'Passes':
      actionBtn.innerText = 'Spikes'
      break;
    case 'Spikes':
      actionBtn.innerText = 'Serves'
      break;
  }
  renderActions()
}

function toggleColorBtn() {
  colorBtn.innerText = colorBtn.innerText === 'Color: By Team' ? 'Color: By Player' : 'Color: By Team'
  // clear players in footer //
  footer.querySelector('#team1-players').innerHTML = ''
  footer.querySelector('#team2-players').innerHTML = ''
  renderActions()
}

function togglePlayerBtn(button) {
  if(button.innerText === 'ALL')
    renderActions()
  else
    renderActions(button.dataset.playerId)
}

function renderActions(id=null) {
  // clears currently rendered actions
  let layers = stage.children
  const max = layers.length - 1
  for (let k = max; k > 0; k--)
    layers[k].remove()

  workingLayer = new Konva.Layer()
  let layer = new Konva.Layer()
  let team = currentGame.team2.name === teamBtn.innerText ? 'team2' : 'team1'

  if (colorBtn.innerText === 'Color: By Player') {
    footer.querySelector('#team2-players').innerHTML = ''
    footer.querySelector('#team1-players').innerHTML = ''
    // iterate over players //
    let i = 0
    footer.querySelector(`#${team}-players`).innerHTML += `<button data-player-id="all" class="player-btn">ALL</button>`
    currentGame[team].players.forEach(player => {
      // only draw actions that matches player //
      currentGame[team][actionBtn.innerText.toLowerCase()].forEach(action => {
        if ( (player.id === action.player_id && id === null) || (player.id === action.player_id && id == player.id) )
          drawArrow(layer, action.start_x, action.start_y, action.end_x, action.end_y, chooseColor(action, team, player.number, playerColors[i][0], playerColors[i][1], playerColors[i][2]))
      })
      // add players to footer //
      footer.querySelector(`#${team}-players`).innerHTML += `<button data-player-id="${player.id}" class="player-btn" style="color: ${playerFooterColor[i]}">${player.number}</button>`
      i++
    })
  }
  else
    currentGame[team][actionBtn.innerText.toLowerCase()].forEach(action => drawArrow(layer, action.start_x, action.start_y, action.end_x, action.end_y, chooseColor(action)))

  stage.add(layer)
}

function chooseColor(action, team = false, playerNumber = false, r = 0, g = 255, b = 0) {
  if (colorBtn.innerText === 'Color: By Team') {
    if (action.outcome === 'point') return "#15a919"
    else if (action.outcome === 'error') return "#c43636"
    else return "#6075dd"
  } else {
    if (action.outcome === 'point') {
      const adj = 100
      r + adj > 255 ? r = 255 : r += adj
      g + adj > 255 ? g = 255 : g += adj
      b + adj > 255 ? b = 255 : b += adj
    }
    let hr = r.toString(16)
    if (!hr[1]) hr = ["0", hr].join('')
    let hg = g.toString(16)
    if (!hg[1]) hg = ["0", hg].join('')
    let hb = b.toString(16)
    if (!hb[1]) hb = ["0", hb].join('')
    const base_color = "#" + hr + hg + hb

    return base_color
  }
}
