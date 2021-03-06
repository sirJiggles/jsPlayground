const fetch = require('node-fetch');
const co = require('co');

// promise method
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json() )
//   .then(post => post.title )
//   .then( x => x )

// the * marks it as a generator function (using co)
co(function *() {
  const uri = 'https://jsonplaceholder.typicode.com/posts/1'
  // get the value right back from the promise!
  const response = yield fetch(uri)
  // and again!
  const post = yield response.json()

  // console.log(post);
})

// // Making our own co func called run
run(function *() {
  const uri = 'https://jsonplaceholder.typicode.com/posts/1'
  const response = yield fetch(uri)
  const post = yield response.json()
  // console.log(post)
})


// one way for doing the run function co replacement, but this is not very elegant
// as to continue doing this will create a pyramid of doom
function run(generator) {
  const iterator = generator()
  // this is the first run of the genarator,
  // this will start the execution of line 23
  // this will return an iteration, in our case the response from the fetch which is a promise
  const iteration = iterator.next()
  // value from the first iteration is a promise
  const promise = iteration.value
  // run the promise, this gives us a result, then pass the value back into the iterator
  promise.then(x => {
      const anotherIterator = iterator.next(x)
      const anotherPromise = anotherIterator.value
      anotherPromise.then(y => iterator.next(y) )
    }
  )

}

runAgain(function *() {
  const uri = 'https://jsonplaceholder.typicode.com/posts/1'
  const response = yield fetch(uri)
  const post = yield response.json()
  return post.title
})
.catch(err => console.log(err))
.then(x => console.log('got value: ', x))

// run v2, recursive
function runAgain(generator) {
  const iterator = generator()

  function iterate(iteration) {
    // if on the last just return the value
    if (iteration.done) { return iteration.value }
    // else resolve the promise again recursivly
    const promise = iteration.value
    return promise.then(x => iterate(iterator.next(x)))
  }

  return iterate(iterator.next())
}

