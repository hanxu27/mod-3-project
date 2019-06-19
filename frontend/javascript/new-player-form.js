function showNewPlayerForm() {
  newPlayerDiv.hidden = false
}

function hideNewPlayerform() {
  newPlayerForm.reset()
  newPlayerDiv.hidden = true
}

function createPlayer(e) {
  let newPlayer = { name: newPlayerForm.querySelector('#player-name').value, number: newPlayerForm.querySelector('#player-number').value, team: newPlayerForm.querySelector('#player-team').value, position: newPlayerForm.querySelector('#player-position').value }
  console.log(newPlayer);
  fetch(URL_PLAYERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ player: newPlayer })
  }).then(res => res.json())
    .then(res => {
      hideNewPlayerForm()
      console.log(res)
    })
}