var slice = Array.prototype.slice
function bind(asThis) {
    var args = slice.call(arguments, 1)
    var fn = this
    function resultFn() {
        var args2 = slice.call(arguments, 0)
        return fn.apply(resultFn.prototype.isPrototypeOf(this) ? this : asThis, args.concat(args2))
    }
    resultFn.prototype = fn.prototype
    return resultFn
}

if (!Function.prototype.bind) {
    Function.prototype.bind = bind
}
module.exports = {
    bind
}