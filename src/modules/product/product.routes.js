const productController = require("./product.controller");

module.exports = function (fastify, opts, done) {
    fastify.post("/add",productController.addProduct);
    fastify.put("/change-name", productController.editProductName);
    fastify.delete("/remove", productController.removeProduct);
    done();
};
