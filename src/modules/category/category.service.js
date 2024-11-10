const groupModel = require("../group/group.model");
const categoryModel = require("./category.model");

class CategoryService {
    async addCategory(categoryName,groupName) {
        const group = await groupModel.findOne({Name : groupName});
        const result = await categoryModel.create({ Name: categoryName , GroupId: group._id});
        if (result.Name) {
            return result;
        }
        throw new Error();
    }

    async getCategories(){
        const result = await categoryModel.find({});
        if(result){
            return result;
        }
        throw new Error();
    }

    async editCategoryName(categoryNewName, categoryOldName) {
        const result = await categoryModel.updateOne(
            { Name: categoryOldName },
            { $set: { Name: categoryNewName } }
        );
        if (result.modifiedCount !== 1) {
            throw { message: "category name not changed", statusCode: 400 };
        }
        return result;
    }

    async removeCategory(categoryName) {
        const result = await categoryModel.deleteOne({ Name: categoryName });
        if (result.deletedCount !== 1) {
            throw new Error();
        }
        return result;
    }
}

module.exports = new CategoryService();