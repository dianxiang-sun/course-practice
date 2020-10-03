function printArr(arr) {
    for (var i in arr)
        console.log(arr[i]);
}
var my_array = printArr(['A', 'B', 'C']);
console.log(my_array); //Output: undefined
