
// function that has not been curried
let dragon = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!'

const t = dragon('gareth', 'mighty', 'features');

// CURRY version
let dragoon =
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!'

const x = dragoon('gareth')('majestic')('fire')


x

// function can pass though the app and grab arguments as it goes,
// gives you more flexibility

// you can also curry via libs like lodash for example
const _ = require('lodash')

// THIS SMAZING LINE CONVERTS IT FOR YE, many libs also do this
let dragine = _.curry(dragon)

const y = dragine('lisa', 'lovely', 'hearts')

const u = dragine('nat')('sporty')('HTML')

u

y