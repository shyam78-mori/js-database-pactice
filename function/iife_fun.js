(function () {
  console.log("hello");
})();

(function (name) {
  console.log(`hello mr ${name}`);
})("henil");

let sum = (function (a, b) {
  return a + b;
})(12, 8);

console.log(sum);

(async function () {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => res.json()
  );

  console.log(data);
})();


