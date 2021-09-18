function fn1() {
  // Write a function that will
  // add current array item with previous item
  // first item should be added with last item in array
}

function fn2() {
  // Write a function to sum up array items
}

// Fix and explain following codes
function add(a, b) {
  return a + b;
}

const Calculator = {

  a: 3,
  b: 5,
  getSum: function () {
    return add(this.a, this.b);
  }
};

function f3(t) {
  return new Promise(r => global.setTimeout(r, t));
}

console.log(f3(5).then(console.log('did it work?')))
module.exports = { fn1, fn2, f3, Calculator }