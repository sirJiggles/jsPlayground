
// functors are objects that have a map method
// for example array is a functor because it has an implementation
// of map, map is NOT the functor. the obj that implements it is

// this is actually not a functor, as it is type specific
// here we need a string, so we cant maintain structure
// this has more the 'spirit' of functor
function stringFunctor(value, fn) {
  var chars = value.split('')
  return chars.map(function(char) {
      return String.fromCharCode(fn(char.charCodeAt(0)))
  }).join('')
}

function plus1(value) {
  return value + 1
}
function minus1(value) {
  return value - 1
}

[3,4].map(plus1) // = [4, 5]

a = stringFunctor('ABC', plus1)
a
b = stringFunctor('XYZ', minus1)
b

// this also includes promises, streams and arrays, not filter for example!
// they are NOT functions!


// there are three things sometihng needs to be a functor

// 1. have a map function, that takes the contents of the functor and transforms it using a function
// 2. must mainain structure, so if you call on an arry with 3 items you get 3 items back
// 3. must return a functor of the same type