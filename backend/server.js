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
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const groupRoutes = require('./routes/groupRoutes');


app.use('/api/user' , userRoutes)

app.use('/api/groups', groupRoutes);
app.use('/api/habit', habitRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
