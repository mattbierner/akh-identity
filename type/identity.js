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
        return f(Identity.runIdentity(this))
    })

/**
 * Run an identity computation.
 */
Identity.runIdentity = x => x._value

module.exports = Identity