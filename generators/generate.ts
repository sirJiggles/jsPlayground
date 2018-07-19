// run file with quokka

function* someSquence() {
  let power = 1;
  while (true) {
    console.log('before yield');
    yield Math.pow(2, power++);
    console.log('after yield');
  }
}

// generator returns an iterator, which is why we have next func
const it = someSquence();

// runs until you yield
it.next();
console.log(it.next());

function* someList() {
  yield 'one';
  yield 'two';
  yield 'three';
}

const listIt = someList();

console.log(listIt.next());
console.log(listIt.next());
console.log(listIt.next());
console.log(listIt.next());

// now can use for of to loop over iterable
for (let item of someList()) {
  console.log('we are in here');
  console.log(item);
}
