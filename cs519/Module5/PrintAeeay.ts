function printArr(arr): void {
    for (let i in arr)
    console.log(arr[i]);
}

let my_array: void = printArr(['A', 'B', 'C']);
console.log(my_array); //Output: undefined