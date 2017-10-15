const orders = [
  { amount: 230 },
  { amount: 231 },
  { amount: 232 },
  { amount: 233 }
]

// the old way
var totalOrders = 0
for (var i = 0; i < orders.length; i++) {
  totalOrders += orders[i].amount
}

totalOrders

// using reduce (the multi tool of list mutator higher order functions)
var totalOrders = orders.reduce((sum, order) => {
  return sum + order.amount
}, 0)

// last arg is first iteration value
// first arg sum is the value of the last iterations return and order is what we are working on
totalOrders

// great for composition for example
function adding(a, b) {
  return a + b.amount
}

var totalOrders = orders.reduce(adding, 0)
totalOrders

// ADVANCED REDUCE JUICE
const fs = require('fs')

var fileContents = fs.readFileSync('sampleData.txt', 'utf8')
  .trim()
  // split each row
  .split('\n')
  // split each line on tab
  .map(line => line.split('\t'))


console.log(fileContents)



