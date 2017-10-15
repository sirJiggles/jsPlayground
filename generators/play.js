const fetch = require('node-fetch');
const co = require('co');

// promise method
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json() )
  .then(post => post.title )
  .then( x => console.log(x) )

// the * marks it as a generator function (using co)
co(function *() {
  const uri = 'https://jsonplaceholder.typicode.com/posts/1'
  // get the value right back from the promise!
  const response = yield fetch(uri);
  // and again!
  const post = yield response.json;

  console.log(post);
})

