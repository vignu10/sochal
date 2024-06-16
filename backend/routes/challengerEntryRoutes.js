const express = require('express');
const router = express.Router();
const challengeEntryController = require('../controllers/challengerEntryController');

// Route to create a new challenge entry
router.post('/', challengeEntryController.createChallengeEntry);

// Route to get all challenge entries
router.get('/', challengeEntryController.getAllChallengeEntries);

module.exports = router;
