/*
create a pipe() function, which chains multiple functions together to create a new function.
Suppose we have some simple functions like this
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

Your pipe() would be used to generate new functions

pipe([
  times(2),
  times(3)
])  
// x * 2 * 3
pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4
pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4

to make things simple, functions passed to pipe() will all accept 1 argument
*/

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

function pipe(funcs) {
	return function (arg){
        return funcs.reduce((acc, curr) => curr.call(this, acc), arg) 
    }
}

const multiplication = pipe([
    times(2),
    times(3)
  ])  
  // x * 2 * 3


  console.log(multiplication(2))