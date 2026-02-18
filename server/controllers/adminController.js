const User = require('../models/User');

// Get all students (Admin only)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get dashboard stats (Admin only)
exports.getDashboardStats = async (req, res) => {
  try {
    const Event = require('../models/Event');
    const Registration = require('../models/Registration');

    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalEvents = await Event.countDocuments();
    const totalRegistrations = await Registration.countDocuments();

    res.json({
      totalStudents,
      totalEvents,
      totalRegistrations
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
