const express = require("express");
const app = express();
const PORT = 8080;

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ DevOps Simulator is running successfully!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
