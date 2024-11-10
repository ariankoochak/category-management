const categoryController = require("./category.controller");

module.exports = function (fastify, opts, done) {
    fastify.post("/add",categoryController.addCategory);
    fastify.put("/change-name", categoryController.editCategory);
    fastify.delete("/remove", categoryController.removeCategory);
    done();
};
