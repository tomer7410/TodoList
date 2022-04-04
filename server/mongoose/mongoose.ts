const mongoose = require('mongoose');
const server = '127.0.0.1:27017'; 
const database = 'todoApp';         
export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`, {
            useNewUrlParser: true,       
        });
        console.log("connected to mongo");
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }

};
export const getMongoose=()=>{ return mongoose}