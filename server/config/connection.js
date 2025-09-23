const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected');
        });
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        // Close the connection when the application terminates
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to application termination');
            process.exit(0);
        });


    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
