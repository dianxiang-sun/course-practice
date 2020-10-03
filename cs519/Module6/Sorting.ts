var numbers = [1, 9, 7, 3]; //INPUT
var sqrs = numbers.map(num => num * num).sort((previous, next) => previous - next);
console.log("square of numbers are : " + sqrs );

