const groupRouter = require('../group/group.routes');

function routes(fastify, options, done) {
    fastify.register(groupRouter, { prefix: "/group" });
    done();
}

module.exports = routes;
