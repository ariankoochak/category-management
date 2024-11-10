const groupService = require("./group.service");

class GroupController {
    async addGroup(req, res) {
        const { groupName } = req.body;
        const result = await groupService.addGroup(groupName);
        if (result) {
            res.status(201);
            res.send("group created successfully");
        } else {
            throw new Error()
        }
    }
    
    async editGroup(req, res) {
        const { groupNewName, groupOldName } = req.body;
        const result = await groupService.editGroup(groupNewName,groupOldName);
        if (result) {
            res.status(201);
            res.send("group edited successfully");
        } else {            
            throw new Error()
        }
    }

    async removeGroup(req,res){
        const { groupName } = req.body;
        const result = await groupService.removeGroup(groupName);
        if (result) {
            res.status(200);
            res.send("group deleted successfully");
        } else {
            throw new Error();
        }
    }
}

module.exports = new GroupController();
