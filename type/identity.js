"use strict"
const spec = require('akh.core.spec')

/**
 * Identity computation.
 */
const Identity = function (value) {
    this._value = value
}

spec.Monad(Identity,
    x => new Identity(x),
    
    function chain(f) {
        return f(Identity.run(this))
    })

/**
 * Run an identity computation.
 */
Identity.run = x => x._value

Identity.prototype.run = function() {
    return this._value
}

module.exports = Identity