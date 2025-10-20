const express = require("express");
const app = express();
const port = 4000;

// Fake data for the activity feed
const activityFeed = [
  {
    id: 1000,
    title: "New Photo Uploaded",
    body: "Alice uploaded a new photo to her album.",
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
  res.json(activityFeed);
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Feed available at http://localhost:${port}/feed`);
  console.log(`Health check at http://localhost:${port}/status`);
});
