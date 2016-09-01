/**
 * @fileOverview Identity monad transformer.
 */
"use strict"
const spec = require('akh.core.spec')

const runIdentityT = x => x._value

/**
 * Identity monad transformer.
 * 
 * Transforms a monad to itself.
 * 
 * One application is to define a set of custom operations on a structure
 * without effecting the underlying structure. For example, specializing a
 * `State` on state type.
 * 
 * @param m Base monad.
 */
const Identity = m => {
    const Instance = function(x) {
        this._value = x
    }
    
    spec.Monad(Instance,
        x => new Instance(m.of(x)),
        
        function(f) {
            return new Instance(
                runIdentityT(this)
                    .chain(x => f(runIdentityT(x))))
        })
    
    spec.Monoid(Instance,
        new Instance(m.zero),
        
        function(b) {
            new Instance (
                runIdentityT(this)
                    .concat (runIdentityT(b)))
        })
    
    spec.Transformer(Instance, m,
        x => new Instance(x))
    
    Instance.prototype.run = function() {
        return Identity.run(this)
    }

    return Instance
}

/**
 * Run an identity computation.
 */
Identity.run = runIdentityT

module.exports = Identity;