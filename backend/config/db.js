import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI); // connect to MongoDB using MONGO_URI from .env
        console.log(`MongoDB Connected: ${connection.connection.host}`); // attempts to connect app to MongoDB database
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // exit code 1 means failure, 0 means success
    }
}