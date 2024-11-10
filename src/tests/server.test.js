const axios = require("axios");
const fastify = require("fastify")();
const mongoose = require("mongoose");

beforeAll(async () => {
    const errorHandler = require("../utils/errorHandler");

    require("../config/mongoose/mongoose.config");

    fastify.register(require("../modules/router/routes"));

    fastify.setErrorHandler(errorHandler);

    await fastify.listen({ port: 3000 });
});

afterAll(async () => {
    await fastify.close();

    if (mongoose.connection.readyState) {
        await mongoose.disconnect();
    }
});

describe("Fastify API", () => {
    test("add group test", async () => {
        const dataObj = JSON.parse(`{"groupName": "test"}`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "post",
            url: "http://localhost:3000/group/add",
        });
        expect(response.status).toBe(201);
        expect(response.data).toBe("group created successfully");
    });

    test("add category test", async () => {
        const dataObj = JSON.parse(`{
            "categoryName" : "salam",
            "groupName" : "test"
        }`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "post",
            url: "http://localhost:3000/category/add",
        });
        expect(response.status).toBe(201);
        expect(response.data).toBe("category created successfully");
    });

    test("edit category test", async () => {
        const dataObj = JSON.parse(`{"categoryOldName" : "salam","categoryNewName" : "salamNew"}`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "put",
            url: "http://localhost:3000/category/change-name",
        });
        expect(response.status).toBe(201);
        expect(response.data).toBe("category edited successfully");
    });

    test("remove category test", async () => {
        const dataObj = JSON.parse(`{"categoryName": "salamNew"}`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "delete",
            url: "http://localhost:3000/category/remove",
        });
        expect(response.status).toBe(200);
        expect(response.data).toBe("category deleted successfully");
    });

    test("edit group test", async () => {
        const dataObj = JSON.parse(`{
            "groupOldName" : "test",
            "groupNewName" : "testNew"
        }`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "put",
            url: "http://localhost:3000/group/change-name",
        });
        expect(response.status).toBe(201);
        expect(response.data).toBe("group edited successfully");
    });

    test("remove group test", async () => {
        const dataObj = JSON.parse(`{"groupName": "testNew"}`);
        const response = await axios({
            headers: {
                "content-type": "application/json",
            },
            data: dataObj,
            method: "delete",
            url: "http://localhost:3000/group/remove",
        });
        expect(response.status).toBe(200);
        expect(response.data).toBe("group deleted successfully");
    });
});
