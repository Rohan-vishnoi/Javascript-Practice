//The reduce method of array instances executes a user-supplied
// "reducer" callback function on each element of the array

 const array = [1,2,3,4,5];
//
// const initialValue = 0;
// const sumWithInitial = array.reduce((acc, curr) => acc + curr, initialValue);
// console.log(sumWithInitial);

// console.log([1,100].reduce((a,b) => Math.max(a,b)));

console.log(array.reduce((a,b) => Math.min(a,b)));

console.log(array.reduce((a, b) => a + b,25));

