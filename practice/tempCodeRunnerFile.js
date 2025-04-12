let str5 = ["a", "g", "s", "g", "a"];

function charCount(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }

  return counts;
}

console.log(charCount(str5));
