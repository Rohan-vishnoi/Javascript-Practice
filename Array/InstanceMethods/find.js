// The find method returns the first element from array which satisfy the condition.
// if no values satisfy he condition , undefined is returned

// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
// If you need to find if any element satisfies the provided testing function, use some().
// If you need to find all elements that satisfy the provided testing function, use filter().
//
// const array = [5,12,8,130,44];
// const found = array.find(x => x % 2 === 0);
// console.log(found);
//
const map  = [{name:"cherries" , quantity:"2"},{name:"cherrdasies" , quantity:"2"},{name:"chersaAWSries" , quantity:"2"}];


console.log(map.find(({name}) => name === "cherries"));