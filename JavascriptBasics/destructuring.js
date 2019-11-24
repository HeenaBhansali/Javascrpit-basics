// Array Matching
var list = [1, 2, 3]
var [a, , b] = (list[
  // a= 1, b =3
  (b, a)
] = [a, b])
// a=3, b=1

// Default values
var obj = { a: 1 }
var list = [1]
var { a, b = 2 } = obj
var [x, y = 2] = list

/* ES5 equivalent
var obj = { a: 1 }
var list = [1]
var a = obj.a
var b = obj.b === undefined ? 2 : obj.b
var x = list[0]
var y = list[1] === undefined ? 2 : list[1]*/

// String Interpolation
let a = 20

function somef() {
  let a = 100
  return `this is ${a}`
}
console.log(somef()) //  this is 100

// Object destructuring
let a = 20

function somef() {
  let a = 100
  let b = 200
  return { a, b }
}
console.log(somef()) // {a: 100, b:200}

//
const { a: b, c } = { a: 100, c: 200 } // a- undefined b- 100 c- 200

//
let a = 20

function somef() {
  let a = 100
  let me = `this is ${a}`
  a = 200
  return me
}
console.log(somef()) // this is 100

//
let a = 20

function somef() {
  let me = `this is ${a}`
  return me
}

function somef2() {
  let a = 100
  return somef()
}
console.log(somef2()) //  this is 20

//
function somef() {
  let me = `this is ${a}`
  return me
}

function somef2() {
  let a = 100
  return somef()
}
console.log(somef2()) // Reference error: a is not defined

// Using parameter context matching
let a = { my: 10, yours: 20 }

const someF = inpObj => {
  let my = a.my
  let yours = a.yours
  return my + yours
}
console.log(someF(a))

/* 
const someF = ({ my, yours}) => my + yours
someF({my: 10, yours: 20}) */

//
let [a, b, ...c] = [10, 20] // a- 10, b-20 c-[]

//
let [a, b, ...c] = [10, 20, 30] // a- 10, b-20, c-[30]

//
let [a, b, c] = [10, 20, 30, 40] // a=10, b=20, c=30

//
let [a, b, c, d, e] = [10, 20, 30, 40] // 10,20,30,40, undefined

//
let [a, b, c, d, e, ...f] = [10, 20, 30, 40] // 10,20,30,40,undefined,[]

//
let a = [10, 20]

const someF = inpArr => {
  let my = a[0]
  let yours = a[1]
  return my + yours
}

console.log(someF(a))

/*
let a = [10, 20]
const someF = ([my, yours]) => my + yours
console.log(someF(a))
*/

//
let a = [10, 20, 30, 40, 50]

const someF = inpArr => {
  let my = a[0]
  let yours = a.slice(1, a.length)
  return yours.map(val => val + my)
}

console.log(someF(a))

/*
let a = [10, 20, 30, 40, 50]
const someF = ([my, ...yours]) => yours.map(val => val + my)
console.log(someF(a))
*/

//
let { a, b = 100 } = { a: 10, b: 20 } // a-10 b-10

//
let { a, b = 100 } = { a: 10 } // a-10, b-100

//
let someF = (...args) => console.log(args)
someF(1, 2, 3, 4, 5)
// [1,2,3,4,5]

//
let someF = (a, ...args) => console.log(args)
someF(1, 2, 3, 4, 5)
// [2,3,4,5]
