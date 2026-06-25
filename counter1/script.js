const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeby = document.querySelector('.changeby')
const resetBtn = document.querySelector('.reset-btn')

minusBtn.addEventListener('click', () => {
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeby.value)
  count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', () => {
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeby.value)
  count.innerText = countValue + changeByValue
})
resetBtn.addEventListener('click',() => {
  count.innerText=0
})