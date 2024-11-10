const productService = require("./product.service");

class ProductController{
    async addProduct(req,res){
        const {productName , productPrice , productCategory} = req.body;
        const result = await productService.addProduct(productName,productPrice,productCategory);
        if(result.Name){
            res.status(201);
            res.send("product created successfully");
        }
        else{
            throw new Error();
        }
    }

    async editProductName(req,res){
        const { productNewName, productOldName } = req.body;
        const result = await productService.editProductName(productNewName,productOldName);
        if (result) {
            res.status(201);
            res.send("product name updated successfully");
        } else {
            throw new Error();
        }
    }

    async removeProduct(req,res){
        const {productName} = req.body;
        const result = await productService.removeProduct(productName);
        if (result) {
            res.status(200);
            res.send("product removed successfully");
        } else {
            throw new Error();
        }
    }
}

module.exports = new ProductController();