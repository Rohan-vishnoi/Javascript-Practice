// console.log(Array.of("foo" , 2 , "bar" , true));
// console.log(Array.of());

// console.log(Array.of(element1));
// console.log(Array.of(element1  , element2));

// console.log(Array.of(7));
// console.log(Array.of(1,2,3));

function NotArray(len) {
    console.log("Not Array called with length" , len);
}

console.log(Array.of.call(NotArray , 1 ,2,3,5));