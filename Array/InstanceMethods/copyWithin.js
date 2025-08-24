// The copyWIthin() method of Array instances shallow copies part of this array to another location
// in the same array and returns this array without modifying its length

const array = ["a" , "b" , "c" , "d" , "e"];
console.log(array.copyWithin(0,3,4));
console.log(array.copyWithin(0,4));

copyWithin(start , end);