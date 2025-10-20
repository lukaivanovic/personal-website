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
];

app.get("/feed", (req, res) => {
  res.json(activityFeed);
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});
