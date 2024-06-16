const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Route to create a new challenge
router.post('/', challengeController.createChallenge);

// Route to get all challenges
router.get('/', challengeController.getAllChallenges);

module.exports = router;
