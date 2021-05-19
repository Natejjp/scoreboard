function updateTeamName(event) {
  const teamName = document.querySelector('.team1 h2')
  teamName.textContent = event.target.value
}
document.querySelector('.team1 input').addEventListener('input', updateTeamName)

// const teamName = document.querySelectorAll('h2')
// const inputElement = document.querySelectorAll('input')
// function updateTeamName(event) {
//   const currentInputValue = event.target.value
//   inputElement.textContent = currentInputValue
// }
// teamName.forEach(element => element.addEventListener('input', updateTeamName))

const y = document.querySelector('.team1 h2')
const x = y.textContent

let moveCounter = 0
function updateScoreAddition(event) {
  moveCounter++
  if (moveCounter > 21) {
    window.alert(`You won ${x}`)
    return
  }
  const addScore = document.querySelector('.team1 h3')
  addScore.textContent = moveCounter
}
document.querySelector('.add').addEventListener('click', updateScoreAddition)

function updateScoreMinus(event) {
  moveCounter--
  if (moveCounter < 0) {
    window.alert('ayyyy thats negative no way jose')
    return
  }
  const subtractScore = document.querySelector('.team1 h3')
  subtractScore.textContent = moveCounter
}
document.querySelector('.subtract').addEventListener('click', updateScoreMinus)

function main() {}

document.addEventListener('DOMContentLoaded', main)
