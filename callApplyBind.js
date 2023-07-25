Function.prototype.call = function (context, ...args) {
  context = (context === undefined || context === null) ? window : context
  context._fn = this // this指向调用的Function
  let result = context._fn(...args)
  delete context._fn
  return result
}

Function.prototype.apply = function (context, args) { // 写法上就只与传入的参数不同
  context = (context === undefined || context === null) ? window : context
  context._fn = this
  let result = context._fn(...args)
  delete context._fn
  return result
}

Function.prototype.bind = function (context, ...args) {
  context = (context === undefined || context === null) ? window : context
  let _this = this
  return function (...args2) { // 返回一个函数
    context._fn = _this
    let result = context._fn(...[...args, ...args2])
    delete context._fn
    return result
  }
}