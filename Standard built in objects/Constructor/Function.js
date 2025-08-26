// The Function constructor creates function objects.

const sum = new Function("a" , "b", "return a+ b");

console.log(sum(2,3));