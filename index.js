'use strict';

var dust = require('dustjs-linkedin');

module.exports = dust.helpers.pre = dust.helpers.message = function message(chunk, ctx, bodies, params) {
    var msg = (ctx.get('messages') || {})[params.key];
    return chunk.write(msg);
};
