const express = require('express');
const router = express.Router();
const challengerController = require('../controllers/challengerController');

// Route to create a new challenger
router.post('/', challengerController.createChallenger);

// Route to get all challengers
router.get('/', challengerController.getAllChallengers);

module.exports = router;
