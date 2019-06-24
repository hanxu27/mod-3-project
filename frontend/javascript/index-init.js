//____________________ GLOBAL VARIABLES START ____________________//

//stores instances locally
let currentGame 

// URLS //
const URL_BASE = 'http://localhost:3000'
const URL_GAMES = URL_BASE + '/games'
const URL_PLAYERS = URL_BASE + '/players'
const URL_ACTIONS = URL_BASE + '/actions'

// HTML ELEMENTS //
const actionForm = document.getElementById('action-form')
const actionBar = document.getElementById('action-bar')
const newGameDiv = document.querySelector('#new-game-div')
const newGameForm = document.querySelector('#new-game-form')
const dateField = document.querySelector('#date')
const loadGame = document.querySelector('#loadGamesDropdown')
const newPlayerDiv = document.querySelector('#new-player-div')
const newPlayerForm = document.querySelector('#new-player-form')
const teamBtn = document.getElementById('toggle-team-btn')
const actionBtn = document.getElementById('toggle-action-btn')
const colorBtn = document.getElementById('toggle-color-btn')
const footer = document.querySelector('#footer')

// X-AXIS BOUNDS //
const courtBoundLeft  =   50
const courtMidline    =  525
const courtBoundRight = 1000
const spikeZone = [365, 685]

// Y-AXIS BOUNDS //
const courtBoundTop =  35
const courtBoundBot = 515

// NEW ACTION VARS //
let firstClick = true
let startX = 0
let startY = 0
let endX = 0
let endY = 0

// red blue teal purple yellow orange green pink grey lightblue dark green brown
const playerColors = [[214, 68, 68], [0, 140, 255], [33, 229, 170], [136, 68, 214], [209, 221, 31], [129, 223, 40], [108, 141, 217], [68, 113, 214], [169, 98, 22], [0, 0, 0]]
const playerFooterColor = ["#D64444", "#008CFF", "#21E5AA", "#8844D6", "#D1DD1F", "#81DF28", "#D644D5", "#6C8DD9", "#A96216", "#000000"]

// KONVA VARS //
let stage
let court = new Image()
let workingLayer = new Konva.Layer()

// EVENTS //
document.addEventListener('click', handleClick)
actionForm.addEventListener('submit', findPlayer)
newGameForm.addEventListener('submit', createNewGame)
newPlayerForm.addEventListener('submit', createPlayer)

//____________________ GLOBAL VARIABLES END ____________________//

console.log('=== INDEX INIT ===')
// Konva.pixelRatio = 1;

fetchGames()

court.src = 'assets/court.jpg'
court.onload = () => {
  stage = new Konva.Stage({
    container: 'konva-container',
    width: court.width,
    height: court.height
  })
  renderCourt()
  stage.attrs.container.hidden = true
}
