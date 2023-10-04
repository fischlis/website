const info = document.getElementById("index-info")
let countTime = 0
let time = getRandomInt(10000,30000)
const newInfos = []
function showInfo() {
  countTime++
  let newInfo = info.cloneNode(true)
  newInfo.id = countTime
  newInfo.style.position = 'absolute'
  newInfo.style.left = getRandomInt(5,70)+'%'
  newInfo.style.top = getRandomInt(5,55)+'%'
  newInfo.style.display = 'block'
  indexContainer.appendChild(newInfo)
  newInfos.push(newInfo)
}
setInterval(function () {
  countTime++
  let newInfo = info.cloneNode(true)
  newInfo.id = countTime
  newInfo.style.position = 'absolute'
  newInfo.style.left = getRandomInt(5,70)+'%'
  newInfo.style.top = getRandomInt(5,55)+'%'
  newInfo.style.display = 'block'
  indexContainer.appendChild(newInfo)
  newInfos.push(newInfo)
  time = getRandomInt(2000,10000)
}, time)
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}