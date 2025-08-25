// Array.prototype.flatMap();

// flatMap is more efficient than flat()

const arr = [1,3,3];
console.log(arr.flatMap((num) => (num === 2 ? [2,2] : 1 )));
