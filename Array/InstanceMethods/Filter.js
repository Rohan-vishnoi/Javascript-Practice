// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length < 3);
//
// console.log(result);

//filter(callback, thisArg)
// will return with truthy values otherwise it will return nothing , mostly falsy values will
//be filtered

// function BigEnough(word) {
//     word.length > 5;
// }
//
// const result = words.filter(word => BigEnough(word));
// console.log(result);

 // function BigEnough(value) {
 //     return value > 5
 // }
 //
 // const result = [10,9,8,1,3,4].filter(BigEnough);
 // console.log(result);

 //find all prime numbers in an array
 // const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6 , 7, 8 , 9 , 10];
 //
 // function isPrime(n) {
 //     if(n < 2){
 //         return false;
 //     }
 //     if(n % 2 === 0) {
 //         return n === 2;
 //     }
 //     for(let i=3;i*i<=n;i=i+2){
 //         if(n % i === 0) {
 //             return false;
 //         }
 //     }
 //     return true;
 // }
 //
 // const result = array.filter(isPrime);
 // console.log(result);

 //Filtering invalid entries from json

 // const arr = [
 //     { id: 15 },
 //     { id: -1 },
 //     { id: 0 },
 //     { id: 3 },
 //     { id: 12.2 },
 //     {},
 //     { id: null },
 //     { id: NaN },
 //     { id: "undefined" },
 // ];
 //
 // function isValidId(value) {
 //     if(Number.isFinite(value.id) && value.id !== 0) {
 //         return true;
 //     }
 //     return false;
 // }
 //
 // const result = arr.filter(isValidId);
 // console.log(result);

 // const fruits = ["apple", "banana", "grapes", "mango", "orange"];
 //
 // function filterBasedOnQuery(arr, query) {
 //     return arr.filter((word) => word.toLowerCase().includes(query.toLowerCase()));
 // }
 //
 // console.log(filterBasedOnQuery(fruits, "le")); // const fruits = ["apple", "banana", "grapes", "mango", "orange"];
 //
 // function filterBasedOnQuery(arr, query) {
 //     return arr.filter((word) => word.toLowerCase().includes(query.toLowerCase()));
 // }
 //
 // console.log(filterBasedOnQuery(fruits, "le"));
//
// const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
// const greatIds = names.map((name) => parseInt(name.match(/\d+/)[0], 10))
//     .filter((id , idx , arr) => {
//         if (idx > 0 && id <= arr[idx - 1]) return false;
//         if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
//         return true;
//     })
// console.log(greatIds);

//sparse arrays
// console.log([undefined,1, , ].filter(x => x === undefined));

// /**
//  * Calling filter() on non-array objects
//  */
// const arrayLike = {
//     length:4,
//     0:"a",
//     1:"b",
//     2:"c",
//     3:"a"
// }
// console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));