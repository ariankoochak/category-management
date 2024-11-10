const CategoryService = require("./category.service");

class CategoryController {
    async addCategory(req, res) {
        const { categoryName , groupName} = req.body;
        const result = await CategoryService.addCategory(categoryName,groupName);
        if (result) {
            res.status(201);
            res.send("category created successfully");
        } else {
            throw new Error()
        }
    }
    
    async editCategoryName(req, res) {
        const { categoryNewName, categoryOldName } = req.body;
        const result = await CategoryService.editCategoryName(categoryNewName,categoryOldName);
        if (result) {
            res.status(201);
            res.send("category edited successfully");
        } else {            
            throw new Error()
        }
    }

    async removeCategory(req,res){
        const { categoryName } = req.body;
        const result = await CategoryService.removeCategory(categoryName);
        if (result) {
            res.status(200);
            res.send("category deleted successfully");
        } else {
            throw new Error();
        }
    }
}

module.exports = new CategoryController();
