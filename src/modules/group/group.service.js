const groupModel = require("./group.model");

class GroupService {
    async addGroup(groupName) {
        const result = await groupModel.create({ Name: groupName });
        if (result.Name) {
            return result;
        }
        throw new Error();
    }

    async getGroups(){
        const result = await groupModel.find({}).select('Name');
        if(result){
            return result;
        }
        throw new Error;
    }

    async editGroup(groupNewName, groupOldName) {
        const result = await groupModel.updateOne(
            { Name: groupOldName },
            { $set: { Name: groupNewName } }
        );
        if (result.modifiedCount !== 1) {
            throw { message: "group name not changed", statusCode: 400 };
        }
        return result;
    }

    async removeGroup(groupName) {
        const result = await groupModel.deleteOne({ Name: groupName });
        if (result.deletedCount !== 1) {
            throw new Error();
        }
        return result;
    }
}

module.exports = new GroupService();