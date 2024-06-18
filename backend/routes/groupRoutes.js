const express = require('express');
const router = express.Router();
const groups = require('../controllers/groupController');

// Route to create a new challenge entry
router.post('/create-groups', groups.createGroups);

// Route to get all challenge entries
router.get('/get-all-groups', groups.getAllGroups);

module.exports = router;
