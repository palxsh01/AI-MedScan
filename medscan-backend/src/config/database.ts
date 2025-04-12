import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
    host: process.env.DB_HOST,
    dialect: 'postgres', // or 'mysql', 'sqlite', etc. depending on your database
});

const connectDatabase = async () => {
    try {
        await database.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { database, connectDatabase };