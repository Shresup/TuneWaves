import mongoose, { mongo } from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {

        console.log("Connection Establised");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/tunewaves`);
}

export default connectDB;