// Higher Order Function
// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// Callback
// A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the function could be any name
const callback = (n) => {
    return n ** 2
  }
  ​
  // function take other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  ​
  console.log(cube(callback, 3))



//   Returning function
// Higher order functions return function as a value​

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
​
  return doSomething
}
console.log(higherOrder(2)(3)(10))



// setting time
// In JavaScript we can execute some activity on certain interval of time or we can schedule(wait) for sometime to execute some activities.

// setInterval
// setTimeout
// setInterval
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
function callBack() {
  // code goes here
}
setInterval(callback, duration)
function sayHello() {
  console.log('Hello')
}


// setInterval(sayHello, 2000) // it prints hello in every 2 seconds
// setTimeout
// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 second
