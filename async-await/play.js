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
  data = await response.json()
  // now we can access data as we waitin for response
  return data.imageUrl
}

const result = fetchAvatarUrl(123)

result


