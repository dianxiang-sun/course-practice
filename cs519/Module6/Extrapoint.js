var numbers = [1, 9, 7, 3]; //INPUT
var sqrs = numbers.map(function (num) { return num * num; }).sort(function (previous, next) { return previous - next; });
console.log("square of numbers are : " + sqrs);
