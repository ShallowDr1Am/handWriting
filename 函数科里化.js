const add = (...a) => {
  let res = a.reduce((pre, cur) => pre + cur)
  const add_ = (...b) => add(res, ...b)
  add_.output = () => {
    return res
  }
  add_.add = (...b) => add(res, ...b)
  return add_
}
console.log(add(1, 3).add(2).output())