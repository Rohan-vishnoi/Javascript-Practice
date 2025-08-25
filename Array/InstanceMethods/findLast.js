// findLast iterates instance of an array in reverse order and find first element which satisfy condition

const arr = [5,10,15,25,20];
console.log(arr.findLast(x => x % 5 === 0));