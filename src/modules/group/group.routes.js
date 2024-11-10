const groupController = require("./group.controller");

module.exports = function (fastify, opts, done) {
    fastify.post("/add",groupController.addGroup);
    done();
};
