//Array.fromAsync()

// The Array.fromAsync() static method creates a new, shallow copied Array instance from an async iterable , iterable or array-like object

// Array.fromAsync(items)
// Array.fromAsync(items, mapfn)
// Array.fromAsync(items, mapfn , thisArg)
// return value is new Promise whose fullfiment values is new Array instance

// from async create array from
//
// async iterable objects
// iterable objects
//

// const result = [];
//
// for await (const element of items) {
//     result.push(element);
// }

//from and async from are similar except async from handles async objects
//asyncfrom returns an promise object

//if array.from async called with a non async iterable object , each element to be added to array is first awaited

const asynciterable = (async function* (){
    for(let i = 0;i< 5 ;i++) {
        await new Promise((resolve) => setTimeout(resolve , 10*i));
        yield i;
    }
})();

Array.fromAsync(asynciterable).then((array) => console.log(array));