// stream is like a mix between array and promise
// where it is a flow of data that will arrive .. when it likes

const sillStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 2000)
    setTimeout(() => callback(3), 3000)
  }
}

// sillStream.each(console.log)

// why use this? need to process data that its so big it does not fit in memory for example
// even if you have memory it would take a long time to read it all up before processing it
// model it as a stream then attach a handler at the end of the stream when done

// Here is an example of just something like that
const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('customers.csv', 'utf8'))
  .split()
  .map(line => line.split(','))
  .map(parts => ({
    name: parts[0],
    numPurchases: parts[1]
  }))
  .filter(customer => customer.numPurchases > 2)
  .map(customer => customer.name)
  .each(x => console.log('each: ', x))


  // this is really handy for UI events like clicking for example.
  // look at RXJS / Bacon.js