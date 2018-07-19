// cotinuing from generate ts
function* seq() {
  let last = 0;
  while (true) {
    last = yield last + 5;
    console.log(`last = ${last}`);
  }
}

// here we can now push values into the generator
// using the next function, as the generatir remembers the state of the
// variabe then we can do things like this:
const it = seq();
console.log(it.next().value);
console.log(it.next(1).value);
console.log(it.next(10).value);
console.log(it.next(20).value);

// when you push something into yield it assigns it the next time it runs for example
// first time we call we push noting in, but the time after that in the line 'last = yield'
// the last is going to be 1 in our example, do it goes like this
// next() -> return 0 + 5
// next(1) last = 1, return last + 5
// next(10) last = 10, return last + 5

// Making an iterator, because generator returns one we can do it like so
const gsus = {
  [Symbol.iterator]: function*() {
    yield 'G';
    yield 'S';
    yield 'U';
    yield 'K';
  }
};

for (let g of gsus) {
  console.log(g);
}

// as arrays and strings can also be iterable you can use yield* to yield things
// out one by one by one
const gsus2 = {
  [Symbol.iterator]: function*() {
    yield* 'gsuk';
  }
};

for (let g of gsus2) {
  console.log(g);
}

// could take this one step further with something like this
const gsus3 = {
  [Symbol.iterator]: function*() {
    yield* [1, 2, 3];
    yield 4;
    yield* [5, 6, 7];
  }
};

console.log([...gsus3]);
