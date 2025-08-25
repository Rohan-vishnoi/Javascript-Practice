// Array.prototype.flat();
//
// The flat method of Array instances create a new array with all sub-array elements

const arr1 = [0, 1, 2 , [3 , 4]];
console.log(arr1.flat(1));

const arr2 = [0 , 1, 2 , [3,[4,5]]];
console.log(arr2.flat(2));

