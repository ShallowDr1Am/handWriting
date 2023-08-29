class Scheduler {
  constructor(limit) {
    this.limit = limit
    this.queue = []
    this.runCounts = 0
  }
  add(time, order) {
    const myPromise = () => {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          console.log(order + ':')
          reslove()
        }, time)
      })
    }
    this.queue.push(myPromise)
  }
  taskStart() {
    for (let i = 0; i < this.limit; i++) {
      this.request()
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.limit) return
    this.runCounts++
    this.queue.shift()().then((res) => {
      this.runCounts--;
      this.request()
    })
  }
}
const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  scheduler.add(time, order)
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.taskStart()