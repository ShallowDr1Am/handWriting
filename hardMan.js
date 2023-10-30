function hardMan(str) {
    this.queue = []
    this.name = str
    this.queue.push(() => {
        console.log(this.name);
        this.next()
    });
}

hardMan.prototype.rest = function (wait) {
    const func = () => {
        setTimeout(() => {
            console.log(`Start learning after ${wait} seconds`)
            this.next()
        }, wait * 1000)
    }
    this.queue.push(func)
    return this
}

hardMan.prototype.restFirst = function (wait) {
    const func = () => {
        setTimeout(() => {
            console.log(`Start learning after ${wait} seconds`)
            this.next()
        }, wait * 1000)
    }
    this.queue.unshift(func)
    return this
}

hardMan.prototype.learn = function (str) {
    const func = () => {
        console.log(`Learning ${str}`)
    }
    this.queue.push(func)
    this.next()
}
hardMan.prototype.next = function () {
    if (this.queue.length === 0) return
    const func = this.queue.shift()
    func()
}
const HardMan = (name)=>{
    return new hardMan(name);
} 

