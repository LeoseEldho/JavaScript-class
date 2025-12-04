let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Success");
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});

Promise.any([p1, p2, p3]).then((res) => {
  console.log(res);
}).catch((error) => console.error(error))
// ================================================= Fail Case =================================
let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 3000);
});
let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 1000);
});
let pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});

Promise.any([pr1, pr2, pr3]).then((res) => {
  console.log(res);
}).catch((error) => console.error(error))

// output----------------------------------------------

// [AggregateError: All promises were rejected] {
//   [errors]: [ 'Error', 'Error', 'Error' ]
// }