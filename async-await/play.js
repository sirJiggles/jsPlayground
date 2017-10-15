const fetch = require('node-fetch');


// an example implementation of using standard promises
// function fetchAvatarUrl(userID) {
//   return fetch(`https://catappapi.herokuapp.com/users/${userID}`)
//           .then(response => response.json())
//           .then(data => data.imageUrl)
// }

// THIS IS SHAMAZING!!!!
async function fetchAvatarUrl(userID) {
  // this is now not a PROMISE but an actual response, that means the next line
  // is then evavluated
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userID}`)
  // if this was a promise we could not call the json like this
  const data = await response.json()
  // now we can access data as we waitin for response
  return data.imageUrl
}

const result = fetchAvatarUrl(123)

result

// IMPORTANT
// - async functions always return promises
// - when using multiple promises, still better to use promise.all for example
// to make sure they can all run at the same time

// example of mixing ascyn and promise.all
async function all() {
  const user = 123
  const userRequest = await fetch(`https://catappapi.herokuapp.com/users/${user}`)
  const userData = await userRequest.json()

  return await Promise.all(
    // as async returns a promise we can add it to our new array of promises here
    userData.cats.map(async function(catId) {
      const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
      const data = await response.json()
      return data.imageUrl
    })
  )
}

const data = all()
data

