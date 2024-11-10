const categoryRoutes = require('../category/category.routes');
const groupRouter = require('../group/group.routes');

function routes(fastify, options, done) {
    fastify.register(groupRouter, { prefix: "/group" });
    fastify.register(categoryRoutes, { prefix: "/category" });
    done();
}

module.exports = routes;
