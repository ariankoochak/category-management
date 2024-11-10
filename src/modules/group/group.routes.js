const groupController = require("./group.controller");

module.exports = function (fastify, opts, done) {
    fastify.post("/add",groupController.addGroup);
    fastify.put("/change-name", groupController.editGroup);
    fastify.delete("/remove", groupController.removeGroup);
    done();
};
