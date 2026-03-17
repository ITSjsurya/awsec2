const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({ data: "Hello from Backend 👋" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});