const categoryModel = require("../category/category.model");
const productModel = require("./product.model");

class ProductService {
    async addProduct(productName, productPrice, CategoryName) {
        const category = await categoryModel.findOne({Name : CategoryName});
        if(category){

            const result = await productModel.create({
                Name: productName,
                Price: productPrice,
                CategoryName: CategoryName,
            });
            if(result.Name){
                return result
            }
            else{
                throw new Error();
            }
        }
        else{
            throw {statusCode : 400,message:"category not valid"};
        }
    }
}

module.exports = new ProductService();