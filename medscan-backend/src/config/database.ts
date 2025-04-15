import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string); // No options needed for the latest driver
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

export { connectDatabase };