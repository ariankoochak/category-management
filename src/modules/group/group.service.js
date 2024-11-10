const groupModel = require("./group.model");

class GroupModel{
    async addGroup(groupName){
        try {
            const result = await groupModel.create({Name : groupName });
            return result.Name ? result : 'err';
        } catch (err) {
            return err;
        }
    }
}

module.exports = new GroupModel();