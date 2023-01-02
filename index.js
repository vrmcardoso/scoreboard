let homeCounter = 0
let guestCounter = 0

function add1Home() {
  homeCounter += 1
  updateScore()
}

function add2Home() {
  homeCounter += 2
  updateScore()
}

function add3Home() {
  homeCounter += 3
  updateScore()
}

function add1Guest() {
  guestCounter += 1
  updateScore()
}

function add2Guest() {
  guestCounter += 2
  updateScore()
}

function add3Guest() {
  guestCounter += 3
  updateScore()
}

function updateScore() {
  let homescore = document.getElementById("home-points")
  let guestscore = document.getElementById("guest-points")
  homescore.innerText = homeCounter
  guestscore.innerText = guestCounter
}
