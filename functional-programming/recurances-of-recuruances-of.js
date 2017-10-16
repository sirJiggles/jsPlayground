let countDownFrom = (num) => {
	if (num == 0) { return }
	console.log('------------------------------------');
	console.log(num);
	console.log('------------------------------------');
	countDownFrom(num - 1)
}

countDownFrom(10)

// example use case (lets make a tree that could be used as a menu)
const famo = [
	{
		id: 'gareth', parent: 'nigel'
	},
	{
		id: 'mozart', parent: 'gareth'
	},
	{
		id: 'daisy', parent: 'gareth'
	},
	{
		id: 'nigel', parent: null
	}
]

let makeTree = (items, parent) => {
	let node = {}
	items
		.filter(item => item.parent == parent)
		.forEach(item =>
			// this is the majic right here, will assign the value the result of the recursion
			// this will just keep going until we run out of things to make trees out of
			// this is soooo much better than nested for loops... for example
			node[item.id] = makeTree(items, item.id)
		)
	return node
}

const g = makeTree(famo, null)

// g now looks like
// {
//   "nigel": {
//     "gareth": {
//       "mozart": {},
//       "daisy": {}
//     }
//   }
// }