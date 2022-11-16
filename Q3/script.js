let count = null;
function counter(num = 0) {
  function counterMaker() {
    count += num;
    console.log(count);
  }
  counterMaker();
}

console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
