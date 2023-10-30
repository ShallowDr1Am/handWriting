class LazyMan {
  constructor(name) {
    this.name = name
    this.task = []
    console.log(`My named ${name}`)
    // 这里使用异步调用next()是为了确定所有链式调用都被添加到task[]才开始执行任务
    setTimeout(() => {
      this.next()
    })
  }
  sleep(time) {
    this.task.push(() => {
      console.log('I am sleeping...')
      setTimeout(() => {
        console.log(`after ${time} ms`)
        this.next()
      }, time)
    })
    return this
  }

  eat(food) {
    this.task.push(() => {
      console.log(food)
      this.next()
    })
    return this
  }

  next() {
    let fn = this.task.shift()
    fn && fn()
  }
}

const lazyMan = new LazyMan('jack')
lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear')