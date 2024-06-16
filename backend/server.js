const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use the routes
const challenges = require('./routes/challengesRoutes');
const challengers = require('./routes/challengersRoutes');
const challengeEntries = require('./routes/challengerEntryRoutes');
app.use('/api/challenges', challenges);
app.use('/api/challengers', challengers);
app.use('/api/challengeEntries', challengeEntries);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
