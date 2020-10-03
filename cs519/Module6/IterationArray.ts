const names: string[] = ['Kevin',  'Arthur',  'Evan'];

// for-loop
for(let i = 0, length = names.length; i < length; i++)
{
    console.log(names[i]);
}
console.log("---------------------");

// another way to traverse
for(let name of names)
{
    console.log(name);
}
console.log("--------------------");

//forEach
names.forEach(name => console.log(name));
console.log("-----------------");

const newNames = names.map(name => `${name} Way`);
console.log(newNames);