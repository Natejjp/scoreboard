const inputElement = document.querySelector('input')
const headerTwoElement = document.querySelector('h2')

const updateTeamName = event => {
  const currentInputValue = event.target.value
  headerTwoElement.innerText = currentInputValue
}

inputElement.addEventListener('input', updateTeamName)

const addition = document.querySelector('.add')
let headerThreeElement = document.querySelector('h3')

const addScore = eventTwo => {
  const addButton = eventTwo.target
  // const addButton = eventTwo.target
  // headerThreeElement.value = 1
}
addition.addEventListener('click', addScore)

function main() {}

document.addEventListener('DOMContentLoaded', main)
