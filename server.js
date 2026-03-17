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