// An empty array
const names: string[] = [];
names[0] = 'Tom';
names[1] = 'Kevin';
console.log(names);

//Directly change values
names[0] = 'Joe';
console.log(names)

//Push one more lelment in the end of the array
names.push('Arthur');
//Push one more element at the begining of the array
names.unshift('Evan')
console.log(names);

// Remove one element in the end of the array
names.pop();
// Remove one element at the begining of the array
names.shift();
console.log(names);

// Reverse the order for an array
names.reverse();
console.log(names);