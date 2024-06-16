const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Import routes and use them
const challengeRoutes = require('./routes/challengesRoutes');
const challengerRoutes = require('./routes/challengersRoutes');
const challengeEntryRoutes = require('./routes/challengerEntryRoutes');

app.use('/api/challenges', challengeRoutes);
app.use('/api/challengers', challengerRoutes);
app.use('/api/challengeEntries', challengeEntryRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
