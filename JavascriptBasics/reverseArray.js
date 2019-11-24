/*Reverse array
Input: [1,2,3,4,5]
Output: [5,4,3,2,1]*/

// Using reverse function
const reverseArray = arr => arr.reverse()

// Using for loop
const reverseArray = arr => {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// Using reduce with unshit
const reverseArray = arr => arr.reduce((acc, cur) => acc.unshift(cur), [])

// Using reduce with rest operator
const reverseArray = arr => arr.reduce((acc, cur) => [cur, ...acc], [])

// Using map
const reverseArray = arr =>
  arr.map((value, index, array) => array[array.length - index - 1])

console.log(reverseArray([1, 2, 3, 4, 5]))
