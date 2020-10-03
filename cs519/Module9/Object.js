var cat = {
    name: 'Mulan',
    age: 8,
    makeSound: function () { return console.log('Mewl~'); }
};
console.log(cat.name);
console.log(cat.age);
cat.makeSound();
var hashmap = {
    Kevin: '203-555-8876',
    Arthur: '232-555-9987'
};
console.log(hashmap.Kevin);
delete hashmap.Kevin;
console.log(hashmap.Kevin);
var targetName = 'Arthur';
console.log(hashmap[targetName]);
