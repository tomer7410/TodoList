"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoose = exports.connectDB = void 0;
const mongoose = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'todoApp';
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`, {
            useNewUrlParser: true,
        });
        console.log("connected to mongo");
    }
    catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
exports.connectDB = connectDB;
const getMongoose = () => { return mongoose; };
exports.getMongoose = getMongoose;
//# sourceMappingURL=mongoose.js.map