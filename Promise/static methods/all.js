// The Promise.all() static method takes an iterable of promises as input and returns
// a single Promise. This returned promise fulfills when all of the input's ' +
// 'promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. ' +
// 'It rejects when any of the input's promises rejects, with this first rejection reason.
//
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve , reject) => {
//     setTimeout(resolve , 100, "foo");
// });
//
// Promise.all([promise1, promise2 , promise3]).then((values) => {
//     console.log(values);
// })

//If all values are non - promise is already fulfilled
const promise1 = Promise.all([1,2,3]);

// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const promise2 =Promise.all([1,2,3,Promise.resolve(444)]);

// One (and the only) input promise is rejected,
// so the returned promise gets rejected
// const promise3 = Promise.all([1,2,3, Promise.reject(new Error("bad"))]);


setTimeout(() => {
    console.log(promise1);
    console.log(promise2);
    // console.log(promise3);
});

Promise.all([p1,p2,p3]).then(([a,b,c]) => {
    console.log(a,b,c);
})