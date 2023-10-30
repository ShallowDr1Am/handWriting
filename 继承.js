function Parent(name) {
  this.name = name
}
Parent.prototype.greet = function () {
  console.log('My Name is' + this.name)
}
function Child(name, age) {
  Parent.call(this, name)// 继承父类的属性
  this.age = age
}

// 使用寄生继承
function inheritPrototype(child, parent) {
  const prototype = Object.create(parent.prototype) // 创建父类原型的副本
  prototype.constructor = child  // 修复构造函数指向
  child.prototype = prototype // 将副本设置为子类的原型
}

// 将父类的原型赋值给子类
inheritPrototype(Child, Parent)

const parent = new Parent('John')
parent.greet()

const child = new Child('Alice', 10)
child.greet()
console.log(child.age)
