const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

// Route to create a new challenge
router.post('/upload-video', habitController.uploadVideo);
router.get('/get-uploaded-videos' , habitController.getUploadedVideos)

module.exports = router;
