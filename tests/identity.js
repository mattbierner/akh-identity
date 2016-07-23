'use strict';
const assert = require('chai').assert
const Identity = require('../index').Identity

describe('Identity', () => {
    it('should wrap simple values', () => {
        assert.strictEqual(3, Identity.runIdentity(Identity.of(3)))
        assert.strictEqual(false, Identity.runIdentity(Identity.of(false)))
        assert.strictEqual('abc', Identity.runIdentity(Identity.of('abc')))
        assert.strictEqual(undefined, Identity.runIdentity(Identity.of(undefined)))
    })

    it('should wrap complex types values', () => {
        const a = {};
        assert.strictEqual(a, Identity.runIdentity(Identity.of(a)))
    })

    it('should thread values through chain', () => {
        const c = Identity.of(3).chain(x => Identity.of(x + 5))

        assert.strictEqual(
            8,
            Identity.runIdentity(c))
    })

    it('should chain in correct order', () => {
        const c = Identity.of(3)
            .chain(x => Identity.of(x + 5))
            .chain(x => Identity.of(x / 2))

        assert.strictEqual(
            4,
            Identity.runIdentity(c))
    })

    it('should map', () => {
        const c = Identity.of(3)
            .map(x => x * x)
            .chain(x => Identity.of(x + 1))

        assert.strictEqual(
            10,
            Identity.runIdentity(c))
    })
}) 