import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import apiRoutes from './routes/apiRoutes';
import { config } from 'dotenv';
import { logger } from './utils/logger';
import bodyParser from 'body-parser';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medscan', {
    // Modern MongoDB driver no longer needs useNewUrlParser and useUnifiedTopology
})
.then(() => {
    logger.info('Database connected successfully');
})
.catch((error) => {
    logger.error('Database connection failed:', error);
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});