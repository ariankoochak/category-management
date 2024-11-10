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
}

module.exports = new ProductController();