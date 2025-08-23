//Array.from();
// The Array.from(); static method creates a new , shallow copied Array instance from an iterable or Array-like object

// console.log(Array.from("foo"));
// console.log(Array.from([1,2,3], (x) => x + x));

// Array.from(items);
// Array.from(items, mapfn);
// Array.from(items, mapfn , thisArg);


//map function is function to call every element of the array
//return value is array

//Array from lets create an object from iterable objects(objects such as map and set )
//array like objects

//to convert ordinary object thats not iterable , use Objects.keys(), Object.values() , Object.entries()
//to convert an async iterable to an array, use Array.fromAsync()

// Array.from() never creates an sparse array , if the object not defined they become undefined in new array

// both are same Arrays.from(obj, mapfn, thisArg) or Arrays.from(obj).map(mapfn, thisArg);

// console.log(Array.from("foo"));
//
// console.log(Array.from([2,4,6]) , (x) =>  x % 2)

// console.log(Array.from(new Set(["foo" , "bar" , "foo" , "baz"])));

// const images = document.querySelectorAll("img");
// const sources = Array.from(images , (image) => image.src);
// const insecureSources = sources.filter((link) => link.startWith("http://"))

console.log(Array.from([1,2,3] , (x) => x*x));



