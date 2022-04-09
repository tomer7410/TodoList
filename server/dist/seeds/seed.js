"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUser = exports.seedDb = void 0;
const assigmentModel_1 = require("../models/assigmentModel");
const userModel_1 = require("../models/userModel");
const seedDb = async () => {
    await userModel_1.UserModel.deleteMany({});
    for (let index = 0; index < 100; index++) {
        var assigment = new assigmentModel_1.AssigmentModel({
            name: `Task ${index}`,
            description: `Description number: ${index} `,
            author: "624b5d5b1939427ce0841994"
        });
        try {
            await assigment.save();
        }
        catch (error) {
            console.log(error.message);
        }
        var assigments = await assigmentModel_1.AssigmentModel.find({});
        console.log(assigments);
    }
};
exports.seedDb = seedDb;
const seedUser = async () => {
    var testUser = new userModel_1.UserModel({
        username: "tomer7410",
        password: "74107410"
    });
    try {
        await testUser.save();
        let users = await userModel_1.UserModel.find({});
        console.log(users);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.seedUser = seedUser;
//# sourceMappingURL=seed.js.map