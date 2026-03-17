const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

// API routes
app.get("/api/data", (req, res) => {
  res.json({ data: "Hello from Backend 👋" });
});

// Serve React build
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// IMPORTANT: bind to 0.0.0.0
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});