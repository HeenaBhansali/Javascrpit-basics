/* problem statement: Use the reduce method in combination with the concat 
 method to flatten an array of arrays into a single array that has all the 
 elements of original array
 Input: [[1,2,3],[4,5],[6]]
 Output: [1,2,3,4,5,6] */

let reduceFun = arr => {
  return arr.reduce((acc, cur) => acc.concat(cur), [])
}

console.log(reduceFun([[1, 2, 3], [4, 5], [6]]))
