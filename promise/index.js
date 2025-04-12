// const myPromise1 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 200, "hello")
// })

// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "hii")
// })

// Promise.all([myPromise1,myPromise2]).then((x) => {
//  console.log(x);

// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello guise");
//   }, 3000);
// });

// myPromise.then((response) => {
//   console.log(response);
// });



// function firstPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 Complete"), 1000);
//   });
// }

// function secondPromise(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${message}, Step 2 Complete`), 1000);
//   });
// }

// firstPromise()
//   .then(secondPromise)
//   .then((result) => console.log(result));




const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Something went wrong!"), 1000);
});

failingPromise
  .then((response) => console.log(response))
  .catch((error) => console.error("Error:", error));
