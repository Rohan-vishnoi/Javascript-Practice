// The Promise constructor creates Promise objects. It is primarily used to wrap callback based
// APIS that do not already support promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    },300);
});

promise1.then((value) => {
    console.log(value);
})

console.log(promise1);

// A function to be executed by the constructor. It receives two functions as parameters: resolveFunc
// and rejectFunc. Any errors thrown in the executor will cause the promise to be
// rejected, and the return value will be neglected. The semantics of executor are detailed below.

// Return value
// When called via new, the Promise constructor returns a promise object.
// The promise object will become resolved when either of the functions
// resolveFunc or rejectFunc are invoked. Note that if you call resolveFunc
// and pass another promise object as an argument, the initial promise can
// be said to be "resolved", but still not "settled". See the Promise description for more explanation.

new Promise((resolve , reject) => {
    resolve(thenable);
})

