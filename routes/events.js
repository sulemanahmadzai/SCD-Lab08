const express = require("express");
const { events } = require("../data");
const auth = require("../middleware/auth");
const router = express.Router();

// Create Event
router.post("/", auth, (req, res) => {
  const { name, description, category, date, reminderTime } = req.body;
  const event = {
    id: events.length + 1,
    user: req.user.id,
    name,
    description,
    category,
    date: new Date(date),
    reminderTime: new Date(reminderTime),
  };
  events.push(event);
  res.status(201).json(event);
});

// Get All Events for User
router.get("/", auth, (req, res) => {
  const userEvents = events.filter((event) => event.user === req.user.id);
  res.json(userEvents);
});

module.exports = router;
