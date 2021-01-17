const { bind } = require('../src/index')

const test1 = () => {
    Function.prototype.bind2 = bind
    console.assert(Function.prototype.bind2 !== undefined)
}
const test2 = () => {
    Function.prototype.bind2 = bind
    const fn1 = function () {
        return this
    }
    const newFn1 = fn1.bind2({ name: 'frank' })
    console.assert(newFn1().name === 'frank', 'fn1 this')
}
const test3 = () => {
    Function.prototype.bind2 = bind
    const fn2 = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn2 = fn2.bind2({ name: 'aslan' }, 123, 456)
    console.assert(newFn2()[0].name === 'aslan', 'this')
    console.assert(newFn2()[1] === 123, 'p1')
    console.assert(newFn2()[2] === 456, 'p2')
}
const test4 = () => {
    Function.prototype.bind2 = bind
    const fn2 = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn3 = fn2.bind2({ name: 'aslan' })
    console.assert(newFn3(123, 456)[0].name === 'aslan', 'fn3 this')
    console.assert(newFn3(123, 456)[1] === 123, 'fn3 p1')
    console.assert(newFn3(123, 456)[2] === 456, 'fn3 p2')
}
const test5 = (message) => {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn2 = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn3 = fn2.bind2({ name: 'aslan' })
    console.assert(newFn3(123, 456)[0].name === 'aslan', 'fn3 this')
    console.assert(newFn3(123, 456)[1] === 123, 'fn3 p1')
    console.assert(newFn3(123, 456)[2] === 456, 'fn3 p2')
}
function test6(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function () { }
    const fn2 = fn.bind(undefined, 'x', 'y')
    const object = new fn2()

    console.assert(object.__proto__ === fn.prototype, '原型')
    console.assert(object.p1 === 'x', 'test5 p1')
    console.assert(object.p2 === 'y', 'test5 p2')
    console.assert(typeof object.sayHi === 'function', 'test5 fn')
    console.log(object)
}

test1()
test2()
test3()
test4()
test5('可以二次接受参数')
test6('可以new')






