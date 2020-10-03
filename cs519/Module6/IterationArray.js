var names = ['Kevin', 'Arthur', 'Evan'];
// for-loop
for (var i = 0, length_1 = names.length; i < length_1; i++) {
    console.log(names[i]);
}
console.log("---------------------");
// another way to traverse
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
console.log("--------------------");
//forEach
names.forEach(function (name) { return console.log(name); });
console.log("-----------------");
var newNames = names.map(function (name) { return name + " Way"; });
console.log(newNames);
