const arr = [1, [2, 3, [4, 5]], 23, 3]
Array.prototype.flat = function (deep = 1) {
  let res = []
  deep--
  for (const p of this) {
    if (Array.isArray(p) && deep >= 0) {
      res = res.concat(p.flat(deep))
    } else {
      res.push(p)
    }
  }
  return res
}

// instanceof
function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left),
    prototype = right.prototype;
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

Array.prototype._map = function (cb, thisBinding) {
  // 排除回调非函数情况
  if (typeof cb !== "function") {
    throw new TypeError(`${cb} is not a function`);
  }
  // 排除this为非可迭代对象情况
  if (this == null || typeof this[Symbol.iterator] !== "function") {
    throw new TypeError(`${this} is not a iterable`);
  }
  // 将可迭代对象转换成数组
  const array = [...this];
  const result = [];
  // 执行遍历并回调
  for (let i = 0; i < array.length; i++) {
    result.push(cb.call(thisBinding, array[i], i, this));
  }
  return result;
};
console.log(arr._map(item => item + 1, [3, 4]))

// foreach
Array.prototype._forEach = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback)
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// reduce
Array.prototype._reduce = function (callback, ...args) {
  let start = 0, pre;
  if (args.length) {
    pre = args[0]
  } else {
    pre = this[0]
    start = 1
  }
  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this)
  }
  return pre
}

// filter
Array.prototype._filter = function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && res.push(this[i])
  }
  return res
}