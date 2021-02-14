
//for testing
//let arr = [5,7,1,3,2,6,8,9];

// function to return an array of pairs of swapped indexes
// pair=[i,j] for i == j means no swap performed
// i<=j for index values(i is either before j or at j)
/*
input: arr = [5,7,1,3,2,6,8,9] 
output: ret = [[1, 1], [0, 2],[1, 3],[1, 4], [4, 5], [6, 6], [7, 7]]

ret = [[1, 2], [0, 1]]
[1, 5, 7, 3, 2, 6, 8, 9]
[[2, 3], [1, 2]]
[1, 3, 5, 7, 2, 6, 8, 9]
[[3, 4], [2, 3], [1, 2]]


pair = [1, 1]
arr = [5, 7, 1, 3, 2, 6, 8, 9]
pair = [0, 2]
arr = [1, 5, 7, 3, 2, 6, 8, 9]
pair = [1, 3]
arr = [1, 3, 5, 7, 2, 6, 8, 9]
pair = [1, 4]
arr = [1, 2, 3, 5, 7, 6, 8, 9]
pair = [4, 5]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
pair = [6, 6]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
pair = [7, 7]
arr = [1, 2, 3, 5, 6, 7, 8, 9]

const insertSort = (arr) => {
  let ret=[]
  for(let i = 1; i<arr.length; i++){
    let cur = arr[i]
    let j = i-1
    while(j>=0 && arr[j] > cur){
      arr[j+1] = arr[j]
   	  j--
      console.log(arr)
    }
    arr[j+1] = cur
    let pair=[j+1,i]
    ret.push(pair)
  }
  return ret
}*/

// function to return an array of pairs of swapped indexes
// pair=[i,j] for i == j means no swap performed
// i<=j for index values(i is either before j or at j)
/*
input: arr = [5,7,1,3,2,6,8,9] 
output: ret = [[0, 2], [1, 4], [2, 3], [3, 3], [4, 5], [5, 5], [6, 6], [7, 7]]

pair = [0, 2]
arr = [1, 7, 5, 3, 2, 6, 8, 9]
pair = [1, 4]
arr = [1, 2, 5, 3, 7, 6, 8, 9]
pair = [2, 3]
arr = [1, 2, 3, 5, 7, 6, 8, 9]
pair = [3, 3]
arr = [1, 2, 3, 5, 7, 6, 8, 9]
pair = [4, 5]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
pair = [5, 5]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
pair = [6, 6]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
pair = [7, 7]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
*/
const selectSort = (arr) => {
  let ret=[]
  for(let i = 0; i < arr.length; i++){
    let min = i
    let j = i + 1
    while(j < arr.length){
      if(arr[j]<arr[min]){
        min = j
      }
      j++
    }
    let tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
    let pair=[i,min]
    ret.push(pair)
  }
  return ret
}


/*
input: arr = [5,7,1,3,2,6,8,9] 
output: ret = [[1, 2], [2, 3], [3, 4], [4, 5], [0, 1], [1, 2], [2, 3], [1, 2]]

pair = [1, 2]
arr = [5, 1, 7, 3, 2, 6, 8, 9]
pair = [2, 3]
arr = [5, 1, 3, 7, 2, 6, 8, 9]
pair = [3, 4]
arr = [5, 1, 3, 2, 7, 6, 8, 9]
pair = [4, 5]
arr = [5, 1, 3, 2, 6, 7, 8, 9]
pair = [0, 1]
arr = [1, 5, 3, 2, 6, 7, 8, 9]
pair = [1, 2]
arr = [1, 3, 5, 2, 6, 7, 8, 9]
pair = [2, 3]
arr = [1, 3, 2, 5, 6, 7, 8, 9]
pair = [1, 2]
arr = [1, 2, 3, 5, 6, 7, 8, 9]
*/
const bubbleSort = (arr) => {
  let ret = []
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp;
        ret.push([j,j+1])
      }
    }
  }
  return ret
}