# Identity Monad and Monad Transformer for [Akh Javascript Monad Library](https://github.com/mattbierner/akh) 

The identity transformer, `IdentityT`, transforms a monad to itself. The base type, `Identity`, wraps a simple value.

```bash
# To use as standalone package
$ npm install --save akh.identity

# To use as part of akh library
$ npm install --save akh
```

# Usage
The `Identity` and `IdentityT` implement the [Fantasy Land][fl] monad, functor, and applicative functor interfaces.

<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

```js
// Identity monad
require('akh.identity').Identity
require('akh').Identity

// Identity monad transformer
require('akh.identity').IdentityT
require('akh').IdentityT
```

#### `Identity.run(m)`, `m.run()`
Extract a value from an identity monad.


#### `IdentityT.run(t)`, `t.run()`
Same as `Identity.run` but for transformed type.


## Contributing
Contributions are welcome.

To get started:

```bash
$ cd akh-identity
$ npm install # install dev packages
$ npm test # run tests
```

[fl]: https://github.com/fantasyland/fantasy-land
