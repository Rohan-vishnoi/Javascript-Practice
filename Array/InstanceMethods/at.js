// Array.prototype.at()
// let index = 1;
// const array = [1,0,2];
// console.log(array.at(index))

// Our array with items
// const cart = ["apple", "banana", "pear"];
//
// // A function which returns the last item of a given array
// function returnLast(arr) {
//     return arr.at(-1);
// }
//
// // Get the last item of our array 'cart'
// const item1 = returnLast(cart);
// console.log(item1); // 'pear'
//
// // Add an item to our 'cart' array
// cart.push("orange");
// const item2 = returnLast(cart);
// console.log(item2); // 'orange'

const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined