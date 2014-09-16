var dust = require('dustjs-linkedin');
require('../index.js');

var test = require('tape');

test('Insert a message', function (t) {
    var compiled = dust.compile("Hello {@pre key=\"name\"/}!", "intro");
    dust.loadSource(compiled);

    dust.render('intro', {messages: { name: 'world' } }, function (err, out) {
        t.error(err);
        t.equal(out, 'Hello world!');
        t.end();
    });
});
