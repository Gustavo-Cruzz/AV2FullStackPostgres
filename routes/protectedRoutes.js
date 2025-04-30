const express = require('express');
const router = express.Router();
const protectedController = require('../controllers/protectedController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/protected', authMiddleware, protectedController.accessProtected);

module.exports = router;
