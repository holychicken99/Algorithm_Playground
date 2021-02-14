

let swap1click = false
let gameEnd = false
let swapPos = [-1,-1]
let prevSwap = []

const indexElements = [];
const unsortedArr = [];
let localElements = [];
const listSize = 15;
const numRange = 15

let sortSequence = []
let currStep = 0

let scoreBoard = document.querySelector('#abc')

// insertion sort
const insertSort = (arr) => {
  let temp = []
  for(let i = 0; i < listSize ; i++){
    temp.push(arr[i])
  }

  let ret=[]
  for(let i = 1; i<temp.length; i++){
    j = i - 1
    while(j >= 0 && temp[j] > temp[j + 1]){
      let tempVal = temp[j]
      temp[j] = temp[j + 1]
      temp[j + 1] = tempVal
      ret.push([j, j + 1])
      j--
    }

  }
  //console.log(ret)
  return ret
}

function toggleArray(){
  if(document.getElementById("toggleArray").checked){
    document.querySelector('.row').style.visibility = 'hidden'
  }
  else{
    document.querySelector('.row').style.visibility = 'visible'
    for(let i = 0; i < listSize; i++){
      indexElements[i].innerText = indexElements[i + 15].innerText
    }
  }
}

function toggleTree(){
  if(document.getElementById("toggleTree").checked){
    document.querySelector('.tree').style.visibility = 'hidden'
  }
  else{
    document.querySelector('.tree').style.visibility = 'visible'
    for(let i = 0; i < listSize; i++){
      indexElements[i + 15].innerText = localElements[i]    
    }
  }
}


  let btns = document.querySelectorAll('.gameObject')

  // for(let i = 0; i < btns.length; i++){
  //   console.log(btns[i])
  // }
  // for (let btn in btns ){
  //   btn.addEventListener('click', clickFunc)
  //   indexElements.push(btn)
  // }
  btns.forEach(btn => {
    btn.addEventListener('click', clickFunc)
    indexElements.push(btn)

  })

  

function clickFunc(){
    //console.log(indexElements)
    // console.log(this.getAttribute("data-pos"))
    if(!swap1click){
      swap1click = true
      swapPos[0] = parseInt(this.getAttribute("data-pos"))
      indexElements[swapPos[0]].style.backgroundColor = "orange"
      indexElements[swapPos[0]+15].style.backgroundColor = "orange"
    } else {
      swapPos[1] = parseInt(this.getAttribute("data-pos"))
      indexElements[swapPos[0]].style.backgroundColor = "rgb(71, 175, 179)"
      indexElements[swapPos[0]+15].style.backgroundColor = "rgb(71, 175, 179)"
      swap1click = false
      if(swapPos[0] != swapPos[1]){
        prevSwap.push([swapPos[0], swapPos[1]])
        swap(swapPos)
        if(compare(sortSequence[currStep],swapPos)) {
      //console.log(sortSequence)
          document.getElementById('scoreBoard').innerText = 'Correct move'
        } else {
          document.getElementById('scoreBoard').innerText = 'Incorrect move'
        }
        currStep += 1
      } 
    }

}


function genRandomList(){
  unsortedArr.length = 0
  let arr = []
  for( let i = 0; i < listSize; i++){
    arr.push(i) 
  }

  for(let i = 0; i < 100; i++){
    rand1 = Math.floor((Math.random() * numRange))
    rand2 = Math.floor((Math.random() * numRange))

    let temp = arr[rand1]
    arr[rand1] = arr[rand2]
    arr[rand2] = temp
  }

  
  for(let i = 0; i < listSize; i++){
    unsortedArr.push(arr[i]) 
  }
  //console.log(unsortedArr)

  // sortSequence=
}


// UNDO BUTTON 
const undoBtn = document.querySelector('#undo')
undoBtn.addEventListener('click', ()=>{
  swap1click = false
  //indexElements[swapPos[0]].style.backgroundColor = "pink"
  //indexElements[swapPos[0]+15].style.backgroundColor = "pink"
  if(prevSwap.length != 0){
    indexElements[prevSwap[prevSwap.length-1][0]].style.backgroundColor = "rgb(71, 175, 179)"
    indexElements[prevSwap[prevSwap.length-1][0]+15].style.backgroundColor = "rgb(71, 175, 179)"
    //console.log(prevSwap)
    swapPos = prevSwap.pop()
    //console.log(prevSwap)
    swap(swapPos)
    swapPos = [-1,-1]
    currStep -= 1

    // for(i = 0; i < numRange*2 ; i++){
    // indexElements[i].style.backgroundColor = 'pink'
    // }
  }
})


// RESET BUTTON 
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', ()=>{
  resetElements()
  swap1click = false
  swapPos = [-1,-1]
  prevSwap.length = 0
  currStep = 0


})
function resetElements(){
  for(let i = 0; i < listSize; i++){
    indexElements[i].innerText = unsortedArr[i]
    indexElements[i + 15].innerText = unsortedArr[i]
    indexElements[i].style.backgroundColor = "rgb(71, 175, 179)"
    indexElements[i+15].style.backgroundColor = "rgb(71, 175, 179)"
    localElements[i] = unsortedArr[i]
  }
  gameEnd = false
}



// NEW GAME BUTTON
const newGameBtn = document.querySelector('#newGame')
newGameBtn.addEventListener('click', ()=>{
  genRandomList()
  resetElements()

  let e = document.getElementById("algorithm");
  let algo = e.options[e.selectedIndex].value;
  sortSequence.length = 0;
  if(algo === 'a'){
    sortSequence = insertSort(unsortedArr)
  } else if (algo === 'b'){
    sortSequence = selectSort(unsortedArr)
  }

  swap1click = false
  swapPos = [-1,-1]
  prevSwap.length = 0
  currStep = 0
  document.getElementById('scoreBoard').innerText = 'Begin Game'
})


// SWAP ELEMENTS AFTER CLICK
function swap(arr){
  let temp = indexElements[arr[0]].innerText
  indexElements[arr[0]].innerText = indexElements[arr[1]].innerText
  indexElements[arr[1]].innerText = temp
  let temp15 = indexElements[arr[0]+15].innerText
  indexElements[arr[0]+15].innerText = indexElements[arr[1]+15].innerText
  indexElements[arr[1]+15].innerText = temp15
  let localTemp = localElements[arr[0]]
  localElements[arr[0]] = localElements[arr[1]]
  localElements[arr[1]] = localTemp
  //prevSwap[0] = arr[0]
  //prevSwap[1] = arr[1]
  /*console.log("sortSequence")
  console.log(sortSequence)
  console.log("currStep")
  console.log(currStep)
  console.log("arr0")
  console.log(arr)*/

  // console.log([0,1] === [0,1]) 
}

function compare(a, b){
  return (a[0] == b[0] && a[1] == b[1] || a[0] == b[1] && a[1] == b[0])
}
