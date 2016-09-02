"use strict"

const IdentityT = require('./trans/identity');
const Identity = require('./type/identity');

module.exports = {
    IdentityT: IdentityT,
    Identity: Identity,

    trans: { identity: IdentityT },
    type: { identity: Identity }
};
