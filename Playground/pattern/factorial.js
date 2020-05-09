/** @description imperative programming type
 * @param {number} radius The radius of the circle.
 * @return {number}
 */
function fact01(num) {
  let val = 1;
  for(let i=2;i<=num;i++) {
    val *= i;
  }
  return val;
}

console.log(fact01(100));//9.33262154439441e+157 = 100!(*!를 팩토리얼이라고 읽는다)

function fact02(num) {
  if(num == 0) return 1;
  else return num*fact02(num-1)
}

console.log(fact02(100));

/** @description cache the values
 * @param {number} radius The radius of the circle.
 * @return {function} closerr
 */
var fact03 = function () {
  var cache = {'0' : 1};
  var func = function(n) {
    var result = 0;
    if(typeof(cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = n * func(n-1);
    }
    return result;
  }
  return func;// closer
}();

console.log('fact03', fact03(10));
console.log('fact03', fact03(20));

/*
* * @description memoization:: 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이 사용할 수 있게 한다
 */
function Calculate(key, input, func) {
  Calculate.data = Calculate.data || {};
  if(!Calculate.data[key]) {
    var result;
    result = func(input);
    Calculate.data[key] = result;
  }
  return Calculate.data[key];
}

var result = Calculate(1, 5, function (input) {
  return input * input;
});

console.log('result1', result);

result = Calculate(2, 5, function (input) {
  return input * input / 4;
});

console.log('result2', result);

console.log(Calculate(1));
console.log(Calculate(2));


Function.prototype.memoization = function (key) {
  var arg = Array.prototype.slice.call(arguments, 1);
  this.data = this.data || {};
  return this.data[key] !== undefined ?
      this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate1(input) {
  return input * input;
}

function myCalculate2(input) {
  return input * input / 4;
}

myCalculate1.memoization(1, 5);
myCalculate1.memoization(2, 4);
myCalculate2.memoization(1, 6);
myCalculate2.memoization(2, 7);

console.log(myCalculate1.memoization(1));// myCalculate1.data[1]
console.log(myCalculate1.memoization(2));
console.log(myCalculate2.memoization(1));
console.log(myCalculate2.memoization(2));
