/*Reverse array
Input: [1,2,3,4,5]
Output: [5,4,3,2,1]*/

// Using reverse function
const reverseArray = arr => {
  let newArr = arr.reverse()
  return newArr
}

// Using for loop
const reverseArray = arr => {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// Using reduce with unshit
let reverseArray = arr => {
  return arr.reduce((acc, cur) => {
    acc.unshift(cur)
    return acc
  }, [])
}

console.log(reverseArray([1, 2, 3, 4, 5]))
