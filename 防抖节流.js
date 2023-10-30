const debounce = (fn, delay) => {
  const timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(this, arguments)
    }, delay)
  }
}

const throttle = (func, wait) => {
  let timeout
  return function () {
    let context = this
    let args = arguments
    if (!timeout) [
      timeout = setTimeout(function () {
        timeout = null
        func.apply(context, args)
      }, wait)
    ]
  }
}
