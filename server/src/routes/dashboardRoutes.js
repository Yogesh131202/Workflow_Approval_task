// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/mdashboard', authenticateToken, (req, res) => {
  const userId = req.user.id; // Dynamic user ID
  console.log("mmm",userId)
  // ...
  res.json({ message: 'Manager dashboard data', userId });
});

router.get('/edashboard', authenticateToken, (req, res) => {
  const userId = req.user.id; // Dynamic user ID
  console.log("eee",userId)
  // ...
  res.json({ message: 'Employee dashboard data', userId });
});

module.exports = router;
