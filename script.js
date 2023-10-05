const indexContainer = document.getElementById("index-container")
const popup0 = document.getElementById("index-popup0-container")
const popup1 = document.getElementById("index-popup1-container")
const popup2 = document.getElementById("index-popup2-container")
const popup3 = document.getElementById("index-popup3-container")
const popup4 = document.getElementById("index-popup4-container")
const popup5 = document.getElementById("index-popup5-container")
const popup0Big = document.getElementById("index-popup0-big")
const popup1Big = document.getElementById("index-popup1-big")
const popup2Big = document.getElementById("index-popup2-big")
const popup3Big = document.getElementById("index-popup3-big")
const popup4Big = document.getElementById("index-popup4-big")
const popup5Big = document.getElementById("index-popup5-big")
const popups = [
  [popup0,popup0Big],
  [popup1,popup1Big],
  [popup2,popup2Big],
  [popup3,popup3Big],
  [popup4,popup4Big],
  [popup5,popup5Big],
]
const newPopUps = []
const bg = document.getElementById("big-bg")
let count = 0
let idBig = 0
getRandomArray(popups)
randomPosition(popups)
for (let i=0;i<popups.length;i++) {
  popups[i][0].style.display = 'none'
  popups[i][1].style.display = 'none'
}
let first = popups[0][0].cloneNode(true)
first.id = count
first.style.display = 'block'
indexContainer.appendChild(first)
newPopUps.push(first)
console.log('%c  ♕        niki is king          ♕  ','background: #ffffff; color: #00FF00')
console.log('%c  ♕ IN NIKI WE TRUST xxx miles:) ♕  ','background: #ffffff; color: #00FF00')
function closeAll() {
  bg.style.display = 'none'
  for (let i=0;i<popups.length;i++) {
    popups[i][0].style.display = 'none'
    popups[i][1].style.display = 'none'
  }
  for (let i=0;i<newPopUps.length;i++) {
    newPopUps[i].style.display = 'none'
  }
  first.style.display = 'block'
  for (let i=0;i<newInfos.length;i++) {
    newInfos[i].style.display = 'none'
  }
}
function showAll() {
  bg.style.display = 'none'
  for (let i=0;i<popups.length;i++) {
    popups[i][0].style.display = 'none'
    popups[i][1].style.display = 'none'
  }
  if (newPopUps.length > 0) {
    for (let i=0;i<newPopUps.length;i++) {
      newPopUps[i].style.display = 'none'
    }
  }
  for (let i=0;i<newInfos.length;i++) {
    newInfos[i].style.display = 'none'
  }
  for (let i=0;i<popups.length;i++) {
    newPopUp()
  }
}
function newPopUp(innerW) {
  count++
  let newPop = popups[count%popups.length][0].cloneNode(true)
  newPop.id = count
  if (window.innerWidth < 600) {
    newPop.style.left = getRandomInt(2,40)+'%'
    newPop.style.top = getRandomInt(5,60)+'%'
  } else {
    newPop.style.left = getRandomInt(5,70)+'%'
    newPop.style.top = getRandomInt(5,55)+'%'
  }
  newPop.style.display = 'block'
  indexContainer.appendChild(newPop)
  newPopUps.push(newPop)
}
function openBig() {
  idBig = window.event.target.parentNode.id
  if (idBig.length > 10) {
    idBig = idBig.charAt(11)
  }
  popups[idBig%popups.length][1].style.display = 'block'
  bg.style.display = 'block'
  popups[idBig%popups.length][1].style.zIndex = '99'
}
function closeBig() {
  popups[idBig%popups.length][1].style.display = 'none'
  bg.style.display = 'none'
}
function imgBig() {
  let img = window.event.target
  let newImg = new Image()
  let newBg = document.createElement("div")
  newImg.src = img.src
  newImg.style.position = 'fixed'
  newImg.style.left = '50%'
  newImg.style.top = '50%'
  newImg.style.maxWidth = '90%'
  newImg.style.maxHeight = '90%'
  newImg.style.transform = 'translate(-50%,-50%)'
  newImg.style.zIndex = '101'
  newBg.style.position = 'fixed'
  newBg.style.width = '100vw'
  newBg.style.height = '100vh'
  newBg.style.zIndex = '100'
  newBg.style.backdropFilter = 'blur(10px)'
  indexContainer.appendChild(newImg)
  indexContainer.appendChild(newBg)
  newImg.addEventListener('click', function handleClick(event) {
    newImg.remove()
    newBg.remove()
  })
  newBg.addEventListener('click', function handleClick(event) {
    newImg.remove()
    newBg.remove()
  })
}
function randomPosition(popups,innerW) {
  if (window.innerWidth < 600) {
    for (let i=0;i<popups.length;i++) {
      popups[i][0].style.position = 'absolute'
      popups[i][0].style.left = getRandomInt(2,40)+'%'
      popups[i][0].style.top = getRandomInt(5,60)+'%'
    }
  } else {
    for (let i=0;i<popups.length;i++) {
      popups[i][0].style.position = 'absolute'
      popups[i][0].style.left = getRandomInt(5,70)+'%'
      popups[i][0].style.top = getRandomInt(5,55)+'%'
    }
  }
  for (let i=0;i<popups.length;i++) {
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomArray(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }
  return array
}