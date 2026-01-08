// (initial;condition;progress)
//for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//array
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((ele) => {
//   console.log(ele);
// });

// let obj = {
//   fname: "vikas",
//   age: 25,
//   salary: 123456789,
//   key: "vikas",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

// let obj = {
//   fname: "vikas",
//   age: 25,
// };

// // Object.seal(obj);
// Object.freeze(obj);
// // obj.fname = "akash";
// obj.salary = 1234567;
// console.log(obj);

// let obj1 = {
//   fname: "vikas",
//   age: 25,
//   address: {
//     state: "UP",
//     country: {
//       lname: "India",
//     },
//   },
// };

// let obj2 = obj1;
// let obj2 = { ...obj1 };
// let obj2 = structuredClone(obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.fname = "akash";
// obj2.age = 30;
// obj2.address.country.lname = "Rajasthan";
// console.log(obj2);
// console.log(obj1);

// let arr = ["apple", "carrot", "mangoes"];
// // let [second,...rest] = arr;
// // // console.log(first);
// // console.log(second);
// // console.log(rest[0]);
// let arr2 = [...arr];
// console.log(arr2);

// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// sum(2, 4, 6);

// function sum(a, b, ...args) {
//   //   console.log(args);
//   let sum = 0;
//   console.log(a * b);
//   for (let i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }

// let res = sum(1, 2, 4, 67, 8, 89, 9, 5, 43, 5, 78, 54, 33, 6, 78, 4, 34, 78);
// console.log(res);
