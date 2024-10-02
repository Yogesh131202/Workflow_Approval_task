// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/MDashboard', authenticateToken, (req, res) => {
  const userId = req.user.userId; // Dynamic user ID
  // Fetch data based on userId
  // ...
  res.json({ message: 'Manager dashboard data', userId });
});

router.get('/EDashboard', authenticateToken, (req, res) => {
  const userId = req.user.userId; // Dynamic user ID
  // Fetch data based on userId
  // ...
  res.json({ message: 'Employee dashboard data', userId });
});

module.exports = router;
