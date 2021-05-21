function main() {}
function updateTeamNameOne(event) {
  const teamName = document.querySelector('.team1 h2')
  teamName.textContent = event.target.value
}
document
  .querySelector('.team1 input')
  .addEventListener('input', updateTeamNameOne)

function updateTeamNameTwo(event) {
  const teamName = document.querySelector('.team2 h2')
  teamName.textContent = event.target.value
}
document
  .querySelector('.team2 input')
  .addEventListener('input', updateTeamNameTwo)

const x = document.querySelector('.team1 h2')
const winnerName = x.textContent
let scoreCounter = 0
function updateScoreAddition(event) {
  scoreCounter++
  if (scoreCounter > 21) {
    window.alert(`You won ${winnerName}`)
    return
  }
  const teamScoreOne = document.querySelector('.team1 h3')
  teamScoreOne.textContent = scoreCounter
}
document.querySelector('.add').addEventListener('click', updateScoreAddition)

function updateScoreMinus(event) {
  scoreCounter--
  if (scoreCounter < 0) {
    window.alert('No negatives')
    return
  }
  const teamScoreOne = document.querySelector('.team1 h3')
  teamScoreOne.textContent = scoreCounter
}
document.querySelector('.subtract').addEventListener('click', updateScoreMinus)

const y = document.querySelector('.team2 h2')
const winnerNameTwo = y.textContent
let scoreCounterTwo = 0
function updateScoreAdditionTwo(event) {
  scoreCounterTwo++
  if (scoreCounterTwo > 21) {
    window.alert(`You won ${winnerNameTwo}`)
    return
  }
  const teamScoreTwo = document.querySelector('.team2 h3')
  teamScoreTwo.textContent = scoreCounterTwo
}
document
  .querySelector('.team2 .add')
  .addEventListener('click', updateScoreAdditionTwo)

function updateScoreMinusTwo(event) {
  scoreCounterTwo--
  if (scoreCounterTwo < 0) {
    window.alert('No negatives')
    return
  }
  const teamScoreTwo = document.querySelector('.team2 h3')
  teamScoreTwo.textContent = scoreCounterTwo
}
document
  .querySelector('.team2 .subtract')
  .addEventListener('click', updateScoreMinusTwo)

function setZero(event) {
  teamScoreOne = document.querySelector('.team1 h3')
  teamScoreTwo = document.querySelector('.team2, h3')
  scoreCounter = 0
  scoreCounterTwo = 0
  teamScoreOne.textContent = scoreCounter
  teamScoreTwo.textContent = scoreCounterTwo
}
document.querySelector('button').addEventListener('click', setZero)

document.addEventListener('DOMContentLoaded', main)
