const groupModel = require("./group.model");

class GroupModel {
    async addGroup(groupName) {
        try {
            const result = await groupModel.create({ Name: groupName });
            return result.Name ? result : "err";
        } catch (err) {
            return err;
        }
    }
    async editGroup(groupNewName,groupOldName) {
        try {
            const result = await groupModel.updateOne({Name : groupOldName},{$set : {Name : groupNewName}});            
            return result.modifiedCount === 1 ? result : "err";
        } catch (err) {
            return err;
        }
    }
}

module.exports = new GroupModel();