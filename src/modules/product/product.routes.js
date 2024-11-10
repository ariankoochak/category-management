const productController = require("./product.controller");

module.exports = function (fastify, opts, done) {
    fastify.post("/add",productController.addProduct);
    done();
};
