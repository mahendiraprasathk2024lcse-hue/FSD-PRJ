const express = require('express');
const router = express.Router();
const {
  registerForEvent,
  getMyRegistrations,
  getAllRegistrations,
  getEventRegistrations,
  cancelRegistration
} = require('../controllers/registrationController');
const { protect, admin } = require('../middleware/auth');

router.post('/', protect, registerForEvent);
router.get('/my-registrations', protect, getMyRegistrations);
router.get('/all', protect, admin, getAllRegistrations);
router.get('/event/:eventId', protect, admin, getEventRegistrations);
router.delete('/:eventId', protect, cancelRegistration);

module.exports = router;
