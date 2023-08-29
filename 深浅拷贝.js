// 浅拷贝
// 注意：当object只有一层时，都是深拷贝
// Object.assign({},obj)
// Array.prototype.concat()
// obj.slice()

// 深拷贝
// 1. 简单
let a = {
  name: 'ss',
}
let b = JSON.parse(JSON.stringify(a))

// 2.
const deepClone = (target, map = new WeakMap()) => {
  // 基本类型直接返回
  if (typeof target !== 'object' || target === null) return target
  const constructor = target.constructor
  if (map.has(target)) {
    return map.get(target)
  }
  let newObj = new constructor(target)
  map.set(target, newObj)
  Object.keys(target).forEach((key) => {
    newObj[key] = deepClone(target[key])
  })
  return newObj
}
console.log(deepClone(a))