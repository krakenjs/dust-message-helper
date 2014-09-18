'use strict';

var dust = require('dustjs-linkedin');
require('dustjs-helpers');

module.exports = dust.helpers.pre = dust.helpers.message = function message(chunk, ctx, bodies, params) {
    return chunk.write(ctx.get('messages')[dust.helpers.tap(params.key, chunk, ctx)]);
};
