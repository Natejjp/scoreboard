function updateTeamName(event) {
  const teamName = document.querySelector('.team1 h2')
  teamName.textContent = event.target.value
}
document.querySelector('.team1 input').addEventListener('input', updateTeamName)

let moveCounter = 0
function updateScoreAddition(event) {
  moveCounter++
  const addScore = document.querySelector('.team1 h3')
  addScore.textContent = moveCounter
}
document.querySelector('.add').addEventListener('click', updateScoreAddition)

function updateScoreMinus(event) {
  moveCounter--
  const subtractScore = document.querySelector('.team1 h3')
  subtractScore.textContent = moveCounter
}
document.querySelector('.subtract').addEventListener('click', updateScoreMinus)

function main() {}

document.addEventListener('DOMContentLoaded', main)
