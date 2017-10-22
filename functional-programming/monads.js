// monads are functors, look at functor file!

// it is a functor that implements map AND flatmap!
const Bacon = require('baconjs')

const portuguese = ['que', 'bonito', 'rir', 'pequeno', 'longe']
const randomWord = arr => arr[Math.floor(Math.random() * (arr.length - 1))]

const getPortuguese = word => {
    // just a fake translation promise like a translation API
    const promise = Promise.resolve(`${word} ${randomWord(portuguese)}`)

    // convert the promise to a bacon stream using the function fromPromise
    const stream = Bacon.fromPromise(promise)
    return stream;
};

getPortuguese('thing')
  .onValue(console.log)

// create a bus, basic stream in bacon
const stream = new Bacon.Bus()

stream
  // Just doing this is the point of the modad
  // you wont get the words here you will get the streams!
  // .map(word => getPortuguese(word))
  // THIS IS WHY WE NEED IT
  // flatmap will wait until the stream resolves and "FLATTERN" it into the contaned word vaule,
  // then will pass it on to the on value callback!
  .flatMap(word => getPortuguese(word))
  // Now we can map ;)
  .map(word => word.toUpperCase())
  // called when a word is added
  .onValue(word => console.log(word))

// push some words to the stream
stream.push('cat')
stream.push('meal')
stream.push('trumpet')

// as a side note a promise is also a modad!!!
// it does not have a flatmap implementation per say but it does, it is the then function :D
// this is also true for 'bind' and 'chain' they are different names for the same things
// another would be response.json() ... jeeze

