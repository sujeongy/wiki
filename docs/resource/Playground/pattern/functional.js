/** @description functional programming type
 * @param {number}
 * @return {number}
 */

let fibo01 = function () {
  let cache = {'0': 0,'1': 1},
      result;

  let func = function (n) {
    if(typeof(cache[n]) === 'number') {
      result = cache[n]
    } else {
      result = cache[n] = func(n - 1) + func(n - 2);
    }
    return result;
  };
  return func;
}();

console.log('fibo01', fibo01(10));


let cacher = function (cache,func) {
  let result;
  let calculate = function (n) {
    if(typeof(cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] =func(calculate, n);
    }
    return result;
  };
  return calculate;
};

var fact = cacher({'0':1}, function (func, n) {
  return n * func(n-1);
});

var fibo = cacher({'0':0,'1':1},function (func, n) {
  return func(n-1) + func(n-2);
});

console.log('fact(10)', fact(10));
console.log('fibo(10)', fibo(10));

/** @description functional programming type - currying
 */
function calculate_curry(a, b, c) {
  return a * b + c;
}
 function curry(func) {
   let args = Array.prototype.slice.call(arguments, 1);

   return function () {
     return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
   }
 }
let new_func01 = curry(calculate_curry,1);
console.log('new_func01(2,3)', new_func01(2,3));
let new_func02 = curry(calculate_curry, 1, 3);
console.log('new_func02(3)', new_func02(3));

Function.prototype.curry = function () {
  let fn = this, args = Array.prototype.slice(arguments);
  return function () {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
  };
};

function curry2(func) {
  let args = Array.prototype.slice.call(arguments, 1);
  return function () {
    let arg_idx = 0;
    for(let i=0;i<args.length&&arg_idx<arguments.length;i++) {
      if(args[i] === undefined) {
        args[i] = arguments[arg_idx++];
        return func.apply(null, args);
      }
    }
  }
}

let new_func = curry2(calculate_curry, 1, undefined, 4);
console.log('new_func(3)', new_func(3));

/** @description functional programming type - bind
 */
Function.prototype.bind = function(thisArg) {
  var fn = this,
      slice = Array.prototype.slice,
      args = slice.call(arguments, 1);
  return function () {
    return fn.apply(thisArg, args.concat(slice.call(arguments)));
  };
}

let print_all = function (arg) {
  for(let i in this) console.log(i + " : " + this[i]);
  for(let i in arguments) console.log(i + " : " + arguments[i]);
};

let myObj = { name : 'Krystal' };

let myFunc = print_all.bind(myObj);
myFunc();

let myfunc01 = print_all.bind(myObj, 'developer', 'publisher');
myfunc01('interpreter');


/** @description functional programming type - wrapper
 */
function wrap(object, method, wrapper) {
  let fn = object[method];
  return object[method] = function () {
    return wrapper.apply(this, [ fn ].concat(

    ))
  }
}
