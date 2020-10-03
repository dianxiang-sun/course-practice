// anonymous function
const msg = function() {
    return `I don't need a function name`;
}
console.log(msg());


//anonymous fuction using lambda's arrow functions
const foo = (x: number) => 10 + x;
console.log(foo(100));