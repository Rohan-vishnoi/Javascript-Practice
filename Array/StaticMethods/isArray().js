// Array.isArray()
//the Array.isArray() static method determines whether the passed value is an arrray

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("[]"));
//
// console.log(Array.isArray(new Array(5)));
// console.log(Array.isArray(new Int16Array([15,13])));

//It is more robust alternative of isntance of because it avoid false positive and false negative use cases :-

// Array.isArray() rejects value that arent actual array ,even their array.prototype in their prototype chain -
// inatance of array accept this instances

// Array.isArray()
//the Array.isArray() static method determines whether the passed value is an arrray

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("[]"));
//
// console.log(Array.isArray(new Array(5)));
// console.log(Array.isArray(new Int16Array([15,13])));

//It is more robust alternative of isntance of because it avoid false positive and false negative use cases :-

// Array.isArray() rejects value that arent actual array ,even their array.prototype in their prototype chain -
// inatance of array accept this instances

// all following calls return true
// console.log(Array.isArray([])); // true
// console.log(Array.isArray([1])); // true
// console.log(Array.isArray(new Array())); // true
// console.log(Array.isArray(new Array("a", "b", "c", "d"))); //true
// console.log(Array.isArray(new Array(3))); // true
// // Little known fact: Array.prototype itself is an array:
// console.log(Array.isArray(Array.prototype)); // true
//
// // all following calls return false
// console.log(Array.isArray()); //false
// console.log(Array.isArray({})); //false
// console.log(Array.isArray(null)); //false
// console.log(Array.isArray(undefined)); //false
// console.log(Array.isArray(17)); //false
// console.log(Array.isArray("Array")); //false
// console.log(Array.isArray(true)); //false
// console.log(Array.isArray(false)); //false
// console.log(Array.isArray(new Uint8Array(32))); //false
// // This is not an array, because it was not created using the
// // array literal syntax or the Array constructor
// console.log(Array.isArray({ __proto__: Array.prototype })); //false

