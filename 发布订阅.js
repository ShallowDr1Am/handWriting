class EventEmitter {
  constructor() {
    this.events = new Map()
  }
  on(eventName, cb) {
    this.events.has(eventName)
      ? this.events.get(eventName).push(cb)
      : this.events.set(eventName, cb)
  }
  off(eventName) {
    this.events.delete(eventName)
  }
  emit(eventName) {
    if (!this.events.has(this.eventName)) {
      return
    }
    for (const cb of this.events.get(eventName)) {
      cb()
    }
    this.off(eventName)
  }
}