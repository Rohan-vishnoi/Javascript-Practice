// const array = ["a" , "b" , "c"];
// const iterator = array.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// Return value is new iterable object

// for the sparse arrays the entries method iterates empty slots as they have value undefined

const arr = ["a" , "b" , "c"];
//
// for(const[index, element] of arr.entries()) {
//     console.log(index, element);
// }

for(const element of arr.entries()){
    console.log(element);
}