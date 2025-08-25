
//Array.prototype.reduceRight();
// The reduce right method of array, instances applies a function aganist an acc

const array = [[0,1],[2,3],[4,5]];

const result = array.reduceRight((acc, curr) => acc.concat(curr));
console.log(result);

//The reduceRight() method is an iterative method.It runs a reducer callback function over all
//