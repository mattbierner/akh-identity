"use strict"

const identityT = require('./trans/identity');
const identity = require('./type/identity');

module.exports = {
    IdentityT: identityT,
    Identity: identity,

    trans: { identity: identityT },
    type: { identity: identity }
};
