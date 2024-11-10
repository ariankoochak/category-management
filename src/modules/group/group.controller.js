const groupService = require("./group.service");

class GroupController {
    async addGroup(req, res) {
        try {
            const { groupName } = req.body;
            const result = await groupService.addGroup(groupName);
            if (result !== "err") {
                res.status(201);
                res.send("group created successfully");
            } else {
                res.status(500);
                res.send("error");
            }
        } catch (err) {
            res.send("error");
        }
    }
    
    async editGroup(req, res) {
        try {
            const { groupNewName, groupOldName } = req.body;
            const result = await groupService.editGroup(groupNewName,groupOldName);
            if (result !== "err") {
                res.status(201);
                res.send("group edited successfully");
            } else {
                res.status(500);
                res.send("error");
            }
        } catch (err) {
            res.send("error");
        }
    }
}

module.exports = new GroupController();
