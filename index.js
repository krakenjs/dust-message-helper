'use strict';

var dust = require('dustjs-linkedin');

module.exports = dust.helpers.pre = dust.helpers.message = function message(chunk, ctx, bodies, params) {
    var msg = (ctx.get('messages') || {})[params.key] || '☃' + params.key + '☃';

    if (params.mode == 'json') {
        return chunk.write(JSON.stringify(msg));
    } else {
        return chunk.write(msg);
    }
};
