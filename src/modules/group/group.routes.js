const groupController = require("./group.controller");

module.exports = function (fastify, opts, done) {
    fastify.get("/",groupController.addNewGroup);
    done();
};
