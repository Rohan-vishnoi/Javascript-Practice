// Function.prototype.apply()

// The apply() method of Function instances call this function with a given this value

// const numbers = [5,6,2,3,7];
//
// const max = Math.max.apply(null, numbers);
//
// console.log(max);
//
// const min = Math.min.apply(null, numbers);
// console.log(min);

//
// const characters = ["a" , "b" , "c"];
// const numbers = [1,2,3,4];
//
// characters.push.apply(characters,numbers);
// console.log(characters);

// apply called with this and args

const numbers = [5,6,2,3,7];

const max = Math.max.apply(null, numbers);

console.log(max);
