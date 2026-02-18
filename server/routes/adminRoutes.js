const express = require('express');
const router = express.Router();
const { getAllStudents, getDashboardStats } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

router.get('/students', protect, admin, getAllStudents);
router.get('/stats', protect, admin, getDashboardStats);

module.exports = router;
