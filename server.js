const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// API
app.get("/api/data", (req, res) => {
  res.json({ data: "Hello from Backend 👋" });
});

// Static
app.use(express.static(path.join(__dirname, "build")));

// Catch-all (FINAL FIX)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});