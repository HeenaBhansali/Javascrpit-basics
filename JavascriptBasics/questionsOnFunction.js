// Basic javascript questions on Function

// 1
var a = 1
function b() {
  a = 10
  return
  function a() {}
}
b()
console.log(a)
// output 1 scope of a in console is outside function

// 2
var a = 1
function b() {
  a = 10
  return
  var a = 100
}
b()
console.log(a)
//  output 1 scope of a in console is outside function

// 3
var a = 1
function b() {
  console.log("1--", a)
  return
  var a = 100
}
b()
console.log("2--", a)
// output 1-- undefined 2-- 1 var a is hoisted in b() so undefined

// 4
function test() {
  console.log(a)
  console.log(foo())

  var a = 1
  function foo() {
    return 2
  }
}

test()
/* output undefined 2 
Var a will be hoisted but only declaration so a will be undefined
2nd console calls for function which returns 2 */

// 5
console.log(a())
const a = () => 100

// reference error can't access lexical declaration a before initialization

// 6
console.log(a())
const a = function() {
  return 100
}

// reference error can't access lexical declaration a before initialization

// 7
console.log(a())
function a() {
  return 100
}
// output 100 in js we can call function before declaration

// 8
console.log(a())
var a = () => 100
/* type error a is not a function in case of var hoisting will be done 
but only variable not function so a is not a function
It will look like: 
var a
console.log(a()) 
a = () => 100 */
