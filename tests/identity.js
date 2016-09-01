'use strict';
const assert = require('chai').assert
const Identity = require('../index').Identity

describe('Identity', () => {
    it('should wrap simple values', () => {
        assert.strictEqual(3, Identity.run(Identity.of(3)))
        assert.strictEqual(false, Identity.run(Identity.of(false)))
        assert.strictEqual('abc', Identity.run(Identity.of('abc')))
        assert.strictEqual(undefined, Identity.run(Identity.of(undefined)))
    })

    it('should wrap complex types values', () => {
        const a = {};
        assert.strictEqual(a, Identity.run(Identity.of(a)))
    })

    it('should thread values through chain', () => {
        const c = Identity.of(3).chain(x => Identity.of(x + 5))

        assert.strictEqual(
            8,
            Identity.run(c))
        assert.strictEqual(
            8,
            c.run())

    })

    it('should chain in correct order', () => {
        const c = Identity.of(3)
            .chain(x => Identity.of(x + 5))
            .chain(x => Identity.of(x / 2))

        assert.strictEqual(
            4,
            Identity.run(c))
    })

    it('should map', () => {
        const c = Identity.of(3)
            .map(x => x * x)
            .chain(x => Identity.of(x + 1))

        assert.strictEqual(
            10,
            Identity.run(c))
    })
}) 