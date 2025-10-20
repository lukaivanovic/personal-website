const express = require("express");
const app = express();
const port = 8080;

// Fake data for the activity feed
// TODO: Replace with real database
const activityFeed = [
  {
    id: 1000,
    title: "New Photo Uploaded",
    body: "Alice uploaded a new photo to her album.",
    timestamp: "2025-10-20T10:30:00Z",
  },
  {
    id: 2000,
    title: "Comment on Post",
    body: "Bob commented on Charlie's post.",
  },
  {
    id: 13,
    title: "Status Update",
    body: 'Charlie updated their status: "Excited about the new project!"',
  },
  {
    id: 4000,
    title: "Friend Request",
    body: "Diana sent you a friend request.",
  },
  {
    id: 5000,
    title: "Event Reminder",
    body: "Team meeting starts in 30 minutes!",
  },
];

app.get("/feed", (req, res) => {
  const limit = req.query.limit || activityFeed.length;
  res.json(activityFeed.slice(0, limit));
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Feed available at http://localhost:${port}/feed`);
  console.log(`Health check at http://localhost:${port}/status`);
});
