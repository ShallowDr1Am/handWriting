// Object.create

function createObject(proto) {
  function F() { }
  F.prototype = proto
  return new F()
}

const person = {
  greet: function () {
    console.log('hello!')
  }
}

const test = createObject(person)
test.greet()