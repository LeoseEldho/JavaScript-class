let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Success");
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 Success");
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Success");
  }, 2000);
});

Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
}).catch((error) => console.error(error))
// output p2 with 1second
// ================================================Fail Case
let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr1 Success");
  }, 3000);
});
let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr2 Success");
  }, 1000);
});
let pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});

Promise.race([pr1, pr2, pr3]).then((res) => {
  console.log(res);
}).catch((error)=>console.error(error))